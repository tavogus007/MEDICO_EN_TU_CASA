import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Doctor } from '../entities/doctor.entity';
import { Persona } from '../entities/persona.entity';
import { CreateDoctorDto } from '../dtos/create-doctor.dto';
import { UpdateDoctorDto } from '../dtos/update-doctor.dto';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    private readonly dataSource: DataSource,
  ) {}

  async findAll(): Promise<Doctor[]> {
    return this.doctorRepository.find({
      relations: ['persona', 'vehiculo', 'siisWeb'],
      where: { docEstado: 'A' }, // Solo activos por defecto
    });
  }

  async findOne(persId: number): Promise<Doctor> {
    const doctor = await this.doctorRepository.findOne({
      where: { persId },
      relations: ['persona', 'vehiculo', 'siisWeb'],
    });

    if (!doctor) {
      throw new NotFoundException(`Doctor con ID ${persId} no encontrado`);
    }
    return doctor;
  }

  async create(dto: CreateDoctorDto): Promise<Doctor> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      // Verificar si la persona existe
      const personaExists = await this.personaRepository.findOneBy({
        persId: dto.persId,
      });

      if (!personaExists) {
        throw new NotFoundException(
          `Persona con ID ${dto.persId} no encontrada`,
        );
      }

      // Verificar si ya existe como doctor
      const existingDoctor = await this.doctorRepository.findOneBy({
        persId: dto.persId,
      });

      if (existingDoctor) {
        throw new Error(`La persona ya está registrada como doctor`);
      }

      const doctor = this.doctorRepository.create(dto);
      const savedDoctor = await queryRunner.manager.save(doctor);

      await queryRunner.commitTransaction();
      return savedDoctor;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw error;
    } finally {
      await queryRunner.release();
    }
  }

  async update(persId: number, dto: UpdateDoctorDto): Promise<Doctor> {
    await this.findOne(persId); // Reutiliza la validación de existencia

    const updated = await this.doctorRepository.preload({
      persId,
      ...dto,
    });

    if (!updated) {
      throw new NotFoundException(`Doctor con ID ${persId} no encontrado`);
    }

    return this.doctorRepository.save(updated);
  }

  async delete(persId: number): Promise<void> {
    // Soft delete (cambiar estado en lugar de borrar físicamente)
    const result = await this.doctorRepository.update(
      persId,
      { docEstado: 'I' }, // Inactivo
    );

    if (result.affected === 0) {
      throw new NotFoundException(`Doctor con ID ${persId} no encontrado`);
    }
  }

  // Métodos adicionales específicos para doctores
  async findByEspecialidad(especialidad: string): Promise<Doctor[]> {
    return this.doctorRepository.find({
      where: {
        docEspecialidad: especialidad,
        docEstado: 'A',
      },
      relations: ['persona'],
    });
  }

  async findByUsuario(usuario: string): Promise<Doctor> {
    return this.doctorRepository.findOne({
      where: { docUsuario: usuario },
      relations: ['persona'],
    });
  }
}
