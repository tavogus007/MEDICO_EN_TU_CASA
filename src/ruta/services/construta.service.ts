import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ConstruccionRuta } from '../entities/construta.entity';
import { Ruta } from '../entities/ruta.entity';
import { CreateConstruccionRutaDto } from '../dtos/create-construta.dto';
import { UpdateConstruccionRutaDto } from '../dtos/update-construta.dto';

@Injectable()
export class ConstruccionRutaService {
  constructor(
    @InjectRepository(ConstruccionRuta)
    private readonly construccionRutaRepository: Repository<ConstruccionRuta>,
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
  ) {}

  async create(dto: CreateConstruccionRutaDto): Promise<ConstruccionRuta> {
    const ruta = await this.rutaRepository.findOne({
      where: { rutaId: dto.rutaId },
    });
    if (!ruta) throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);

    const newConstruccion = this.construccionRutaRepository.create({
      constRutaEstado: dto.constRutaEstado || 'A',
      constRutaDescripcion: dto.constRutaDescripcion,
      ruta,
    });

    return await this.construccionRutaRepository.save(newConstruccion);
  }

  async update(
    id: number,
    dto: UpdateConstruccionRutaDto,
  ): Promise<ConstruccionRuta> {
    const construccion = await this.construccionRutaRepository.findOne({
      where: { constRutaId: id },
      relations: ['ruta'],
    });
    if (!construccion)
      throw new NotFoundException(`Construcción #${id} no encontrada`);

    if (dto.rutaId) {
      const ruta = await this.rutaRepository.findOne({
        where: { rutaId: dto.rutaId },
      });
      if (!ruta)
        throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);
      construccion.ruta = ruta;
    }

    this.construccionRutaRepository.merge(construccion, dto);
    return await this.construccionRutaRepository.save(construccion);
  }

  async findAll(): Promise<ConstruccionRuta[]> {
    return await this.construccionRutaRepository.find({ relations: ['ruta'] });
  }

  async findOne(id: number): Promise<ConstruccionRuta> {
    const construccion = await this.construccionRutaRepository.findOne({
      where: { constRutaId: id },
      relations: ['ruta'],
    });
    if (!construccion)
      throw new NotFoundException(`Construcción #${id} no encontrada`);
    return construccion;
  }

  async delete(id: number): Promise<void> {
    const construccion = await this.findOne(id);
    await this.construccionRutaRepository.remove(construccion);
  }
}
