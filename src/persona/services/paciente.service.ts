import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Paciente } from '../entities/paciente.entity';
import { Persona } from '../entities/persona.entity';
import { Igob } from '../../sistema/entities/igob.entity';
import { Smartwatch } from '../../smartwatch/entities/smartwatch.entity';
import { InfoDomicilio } from '../../ruta/entities/infodom.entity';
import { CreatePacienteDto } from '../dtos/create-paciente.dto';
import { UpdatePacienteDto } from '../dtos/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacienteRepository: Repository<Paciente>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
    @InjectRepository(Igob)
    private readonly igobRepository: Repository<Igob>,
    @InjectRepository(Smartwatch)
    private readonly smartwatchRepository: Repository<Smartwatch>,
    @InjectRepository(InfoDomicilio)
    private readonly infoDomicilioRepository: Repository<InfoDomicilio>,
  ) {}

  async create(dto: CreatePacienteDto): Promise<Paciente> {
    const queryRunner =
      this.pacienteRepository.manager.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const persona = await queryRunner.manager.findOne(Persona, {
        where: { persId: dto.persId },
      });
      if (!persona)
        throw new NotFoundException(`Persona #${dto.persId} no encontrada`);

      const paciente = queryRunner.manager.create(Paciente, {
        persId: dto.persId,
        // ... resto de campos
      });

      const saved = await queryRunner.manager.save(paciente);
      await queryRunner.commitTransaction();
      return saved;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      await queryRunner.release();
    }
  }

  private async validarRelaciones(dto: CreatePacienteDto) {
    const relaciones: any = {};

    if (dto.igobId) {
      relaciones.igob = await this.igobRepository.findOne({
        where: { igobId: dto.igobId },
      });
      if (!relaciones.igob)
        throw new NotFoundException(`Igob #${dto.igobId} no encontrado`);
    }

    if (dto.smartId) {
      relaciones.smartwatch = await this.smartwatchRepository.findOne({
        where: { smartId: dto.smartId },
      });
      if (!relaciones.smartwatch)
        throw new NotFoundException(`Smartwatch #${dto.smartId} no encontrado`);
    }

    if (dto.infoDomId) {
      relaciones.infoDomicilio = await this.infoDomicilioRepository.findOne({
        where: { infoDomId: dto.infoDomId },
      });
      if (!relaciones.infoDomicilio)
        throw new NotFoundException(
          `InfoDomicilio #${dto.infoDomId} no encontrado`,
        );
    }

    return relaciones;
  }

  async update(persId: number, dto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { persId },
    });
    if (!paciente)
      throw new NotFoundException(`Paciente #${persId} no encontrado`);

    const relaciones = await this.validarRelaciones(dto as CreatePacienteDto);

    this.pacienteRepository.merge(paciente, {
      pacEstado: dto.pacEstado,
      pacFechaNac: dto.pacFechaNac,
      pacDireccion: dto.pacDireccion,
      pacCelular: dto.pacCelular,
      ...relaciones,
    });

    return await this.pacienteRepository.save(paciente);
  }

  async findAll(): Promise<Paciente[]> {
    return await this.pacienteRepository.find({
      relations: ['persona', 'igob', 'smartwatch', 'infoDomicilio'],
    });
  }

  async findOne(persId: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOne({
      where: { persId },
      relations: ['persona', 'igob', 'smartwatch', 'infoDomicilio'],
    });
    if (!paciente)
      throw new NotFoundException(`Paciente #${persId} no encontrado`);
    return paciente;
  }

  async delete(persId: number): Promise<void> {
    const paciente = await this.findOne(persId);
    await this.pacienteRepository.remove(paciente);
  }
}
