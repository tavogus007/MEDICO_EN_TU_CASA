import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ruta } from '../entities/ruta.entity';
import { SiisWeb } from '../../sistema/entities/siis.entity';
import { CreateRutaDto } from '../dtos/create-ruta.dto';
import { UpdateRutaDto } from '../dtos/update-ruta.dto';

@Injectable()
export class RutaService {
  constructor(
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
    @InjectRepository(SiisWeb)
    private readonly siisWebRepository: Repository<SiisWeb>,
  ) {}

  async create(dto: CreateRutaDto): Promise<Ruta> {
    //const siisWeb = dto.siisWebId
    //  ? await this.siisWebRepository.findOne({
    //      where: { siisWebId: dto.siisWebId },
    //   })
    //  : null;

    //if (dto.siisWebId && !siisWeb) {
    //  throw new NotFoundException(`SiisWeb #${dto.siisWebId} no encontrado`);
    //}

    const newRuta = this.rutaRepository.create({
      rutaEstado: dto.rutaEstado || 'A',
      rutaOrigen: dto.rutaOrigen,
      rutaDestino: dto.rutaDestino,
      rutaDuracionAprox: dto.rutaDuracionAprox
    });

    return await this.rutaRepository.save(newRuta);
  }

  async update(id: number, dto: UpdateRutaDto): Promise<Ruta> {
    const ruta = await this.rutaRepository.findOne({
      where: { rutaId: id },
      relations: ['siisWeb'],
    });
    if (!ruta) throw new NotFoundException(`Ruta #${id} no encontrada`);

    //if (dto.siisWebId) {
    //  ruta.siisWeb = await this.siisWebRepository.findOne({
    //    where: { siisWebId: dto.siisWebId },
    //  });
    //  if (!ruta.siisWeb)
    //    throw new NotFoundException(`SiisWeb #${dto.siisWebId} no encontrado`);
    //}

    this.rutaRepository.merge(ruta, dto);
    return await this.rutaRepository.save(ruta);
  }

  async findAll(): Promise<Ruta[]> {
    return await this.rutaRepository.find({ relations: ['siisWeb'] });
  }

  async findOne(id: number): Promise<Ruta> {
    const ruta = await this.rutaRepository.findOne({
      where: { rutaId: id },
      relations: ['siisWeb'],
    });
    if (!ruta) throw new NotFoundException(`Ruta #${id} no encontrada`);
    return ruta;
  }

  async delete(id: number): Promise<void> {
    const ruta = await this.findOne(id);
    await this.rutaRepository.remove(ruta);
  }
}
