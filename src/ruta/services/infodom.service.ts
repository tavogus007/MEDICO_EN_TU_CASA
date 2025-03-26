import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InfoDomicilio } from '../entities/infodom.entity';
import { Ruta } from '../entities/ruta.entity';
import { CreateInfoDomicilioDto } from '../dtos/create.infodom.dto';
import { UpdateInfoDomicilioDto } from '../dtos/update-infodom.dto';

@Injectable()
export class InfoDomicilioService {
  constructor(
    @InjectRepository(InfoDomicilio)
    private readonly infoDomRepository: Repository<InfoDomicilio>,
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
  ) {}

  async create(dto: CreateInfoDomicilioDto): Promise<InfoDomicilio> {
    const ruta = dto.rutaId
      ? await this.rutaRepository.findOne({
          where: { rutaId: dto.rutaId },
        })
      : null;

    if (dto.rutaId && !ruta) {
      throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);
    }

    const newInfoDom = this.infoDomRepository.create({
      infoDomEstado: dto.infoDomEstado || 'A',
      infoDomReferencia: dto.infoDomReferencia,
      ruta,
    });

    return await this.infoDomRepository.save(newInfoDom);
  }

  async update(
    id: number,
    dto: UpdateInfoDomicilioDto,
  ): Promise<InfoDomicilio> {
    const infoDom = await this.infoDomRepository.findOne({
      where: { infoDomId: id },
      relations: ['ruta'],
    });
    if (!infoDom)
      throw new NotFoundException(`InfoDomicilio #${id} no encontrado`);

    if (dto.rutaId) {
      infoDom.ruta = await this.rutaRepository.findOne({
        where: { rutaId: dto.rutaId },
      });
      if (!infoDom.ruta)
        throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);
    }

    this.infoDomRepository.merge(infoDom, dto);
    return await this.infoDomRepository.save(infoDom);
  }

  async findAll(): Promise<InfoDomicilio[]> {
    return await this.infoDomRepository.find({ relations: ['ruta'] });
  }

  async findOne(id: number): Promise<InfoDomicilio> {
    const infoDom = await this.infoDomRepository.findOne({
      where: { infoDomId: id },
      relations: ['ruta'],
    });
    if (!infoDom)
      throw new NotFoundException(`InfoDomicilio #${id} no encontrado`);
    return infoDom;
  }

  async delete(id: number): Promise<void> {
    const infoDom = await this.findOne(id);
    await this.infoDomRepository.remove(infoDom);
  }
}
