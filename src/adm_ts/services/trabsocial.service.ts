import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TrabajoSocial } from '../entities/trabajoSoclal.entity';
import { CreateTrabajoSocialDto } from '../dtos/create-trabsoc.dto';
import { UpdateTrabajoSocialDto } from '../dtos/update-trabsoc.dto';
import { Persona } from 'src/persona/entities/persona.entity';

@Injectable()
export class TrabsocialService {
  constructor(
    @InjectRepository(TrabajoSocial)
    private readonly mecTrabSocRepository: Repository<TrabajoSocial>,
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>,
  ) {}

  async findAll(): Promise<TrabajoSocial[]> {
    return await this.mecTrabSocRepository.find({
      relations: ['persona'],
    });
  }

  async findOne(persId: number): Promise<TrabajoSocial> {
    const trabSocial = await this.mecTrabSocRepository.findOne({
      where: { persId },
      relations: ['persona'],
    });

    if (!trabSocial) {
      throw new NotFoundException(
        `Trabajo social con ID ${persId} no encontrado`,
      );
    }
    return trabSocial;
  }

  async create(dto: CreateTrabajoSocialDto): Promise<TrabajoSocial> {
    const persona = await this.personaRepository.findOne({
      where: { persId: dto.persId },
    });
    if (!persona) {
      throw new NotFoundException(`Persona #${dto.persId} no encontrada`);
    }

    const newTrabSoc = this.mecTrabSocRepository.create({
      persId: dto.persId,
      tsEstado: dto.tsEstado || 'A',
      tsUsuario: dto.tsUsuario,
    });
    return await this.mecTrabSocRepository.save(newTrabSoc);
  }

  async update(
    persId: number,
    dto: UpdateTrabajoSocialDto,
  ): Promise<TrabajoSocial> {
    const trabajoSoclal = await this.mecTrabSocRepository.findOne({
      where: { persId },
    });
    if (!trabajoSoclal) {
      throw new NotFoundException(
        `Trabajo social con ID ${persId} no encontrado`,
      );
    }
    this.mecTrabSocRepository.merge(trabajoSoclal, {
      tsEstado: dto.tsEstado,
      tsUsuario: dto.tsUsuario,
    });
    return this.mecTrabSocRepository.save(trabajoSoclal);
  }

  async delete(persId: number): Promise<void> {
    const trabajoSoclal = await this.findOne(persId);
    await this.mecTrabSocRepository.remove(trabajoSoclal);
  }
}
