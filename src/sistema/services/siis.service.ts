import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SiisWeb } from '../entities/siis.entity';
import { Agenda } from '../../agenda/entities/agenda.entity';
import { Ruta } from '../../ruta/entities/ruta.entity';
import { Historial } from '../../historial/entities/historial.entity';
import { CreateSiisWebDto } from '../dtos/siis-create.dtos';
import { UpdateSiisWebDto } from '../dtos/siis-update.dto';

@Injectable()
export class SiisWebService {
  constructor(
    @InjectRepository(SiisWeb)
    private readonly siisWebRepository: Repository<SiisWeb>,
    @InjectRepository(Agenda)
    private readonly agendaRepository: Repository<Agenda>,
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
    @InjectRepository(Historial)
    private readonly historialRepository: Repository<Historial>,
  ) {}

  async create(dto: CreateSiisWebDto): Promise<SiisWeb> {
    const relaciones = await this.validarRelaciones(dto);

    const newSiisWeb = this.siisWebRepository.create({
      siisWebEstado: dto.siisWebEstado || 'A',
      ...relaciones,
    });

    return await this.siisWebRepository
      .save(newSiisWeb)
      .then((saved) => (Array.isArray(saved) ? saved[0] : saved));
  }

  private async validarRelaciones(dto: CreateSiisWebDto) {
    const relaciones: any = {};

    if (dto.ageId) {
      relaciones.agenda = await this.agendaRepository.findOne({
        where: { age_id: dto.ageId },
      });
      if (!relaciones.agenda) {
        throw new NotFoundException(`Agenda #${dto.ageId} no encontrada`);
      }
    }

    if (dto.rutaId) {
      relaciones.ruta = await this.rutaRepository.findOne({
        where: { rutaId: dto.rutaId },
      });
      if (!relaciones.ruta) {
        throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);
      }
    }

    if (dto.histoId) {
      relaciones.historial = await this.historialRepository.findOne({
        where: { histoId: dto.histoId },
      });
      if (!relaciones.historial) {
        throw new NotFoundException(`Historial #${dto.histoId} no encontrado`);
      }
    }

    return relaciones;
  }

  async update(id: number, dto: UpdateSiisWebDto): Promise<SiisWeb> {
    const siisWeb = await this.siisWebRepository.findOne({
      where: { siisWebId: id },
      relations: ['agenda', 'ruta', 'historial'],
    });
    if (!siisWeb)
      throw new NotFoundException(`Registro SII Web #${id} no encontrado`);

    const relaciones = await this.validarRelaciones(dto as CreateSiisWebDto);
    this.siisWebRepository.merge(siisWeb, relaciones);

    return await this.siisWebRepository.save(siisWeb);
  }

  async findAll(): Promise<SiisWeb[]> {
    return await this.siisWebRepository.find({
      relations: ['agenda', 'ruta', 'historial'],
    });
  }

  async findOne(id: number): Promise<SiisWeb> {
    const siisWeb = await this.siisWebRepository.findOne({
      where: { siisWebId: id },
      relations: ['agenda', 'ruta', 'historial'],
    });
    if (!siisWeb)
      throw new NotFoundException(`Registro SII Web #${id} no encontrado`);
    return siisWeb;
  }

  async delete(id: number): Promise<void> {
    const siisWeb = await this.findOne(id);
    await this.siisWebRepository.remove(siisWeb);
  }
}
