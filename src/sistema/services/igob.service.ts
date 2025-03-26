import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Igob } from '../entities/igob.entity';
import { CreateIgobDto } from '../dtos/igob-create.dtos';
import { UpdateIgobDto } from '../dtos/igob-update.dto';

@Injectable()
export class IgobService {
  constructor(
    @InjectRepository(Igob)
    private readonly igobRepository: Repository<Igob>,
  ) {}

  async create(dto: CreateIgobDto): Promise<Igob> {
    const newIgob = this.igobRepository.create({
      igobEstado: dto.igobEstado || 'A',
    });
    return await this.igobRepository.save(newIgob);
  }

  async update(id: number, dto: UpdateIgobDto): Promise<Igob> {
    const igob = await this.igobRepository.findOne({
      where: { igobId: id },
    });
    if (!igob)
      throw new NotFoundException(`Registro Igob #${id} no encontrado`);

    this.igobRepository.merge(igob, dto);
    return await this.igobRepository.save(igob);
  }

  async findAll(): Promise<Igob[]> {
    return await this.igobRepository.find();
  }

  async findOne(id: number): Promise<Igob> {
    const igob = await this.igobRepository.findOne({
      where: { igobId: id },
    });
    if (!igob)
      throw new NotFoundException(`Registro Igob #${id} no encontrado`);
    return igob;
  }

  async delete(id: number): Promise<void> {
    const igob = await this.findOne(id);
    await this.igobRepository.remove(igob);
  }
}
