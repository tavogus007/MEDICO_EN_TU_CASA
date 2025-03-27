import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Historial } from '../entities/historial.entity';
import { CreateHistorialDto } from '../dtos/create-historial.dto';
import { UpdateHistorialDto } from '../dtos/update-historial.dto';

@Injectable()
export class HistorialService {
  constructor(
    @InjectRepository(Historial)
    private readonly historialRepository: Repository<Historial>,
  ) {}

  async create(dto: CreateHistorialDto): Promise<Historial> {
    const newHistorial = this.historialRepository.create({
      histoEstado: dto.histoEstado || 'A',
      histoDescripcion: dto.histoDescripcion,
      histoUsuarioId: dto.histoUsuarioId,
    });

    return await this.historialRepository.save(newHistorial);
  }

  async update(id: number, dto: UpdateHistorialDto): Promise<Historial> {
    const historial = await this.historialRepository.findOne({
      where: { histoId: id },
    });
    if (!historial)
      throw new NotFoundException(`Historial #${id} no encontrado`);

    this.historialRepository.merge(historial, dto);
    return await this.historialRepository.save(historial);
  }

  async findAll(): Promise<Historial[]> {
    return await this.historialRepository.find();
  }

  async findOne(id: number): Promise<Historial> {
    const historial = await this.historialRepository.findOne({
      where: { histoId: id },
    });
    if (!historial)
      throw new NotFoundException(`Historial #${id} no encontrado`);
    return historial;
  }

  async delete(id: number): Promise<void> {
    const historial = await this.findOne(id);
    await this.historialRepository.remove(historial);
  }
}
