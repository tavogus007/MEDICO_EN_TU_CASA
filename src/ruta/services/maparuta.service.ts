import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MapaRutas } from '../entities/maparuta.entity';
import { Ruta } from '../entities/ruta.entity';
import { CreateMapaRutasDto } from '../dtos/create-maparuta.dto';
import { UpdateMapaDeRutasDto } from '../dtos/update-maparuta.dto';

@Injectable()
export class MapaRutasService {
  constructor(
    @InjectRepository(MapaRutas)
    private readonly mapaRutasRepository: Repository<MapaRutas>,
    @InjectRepository(Ruta)
    private readonly rutaRepository: Repository<Ruta>,
  ) {}

  async create(dto: CreateMapaRutasDto): Promise<MapaRutas> {
    const ruta = await this.rutaRepository.findOne({
      where: { rutaId: dto.rutaId },
    });
    if (!ruta) throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);

    const newMapa = this.mapaRutasRepository.create({
      mapaEstado: dto.mapaEstado || 'A',
      mapaLatitud: dto.mapaLatitud,
      mapaLongitud: dto.mapaLongitud,
      ruta,
    });

    return await this.mapaRutasRepository.save(newMapa);
  }

  async update(id: number, dto: UpdateMapaDeRutasDto): Promise<MapaRutas> {
    const mapa = await this.mapaRutasRepository.findOne({
      where: { mapaId: id },
      relations: ['ruta'],
    });
    if (!mapa) throw new NotFoundException(`Mapa #${id} no encontrado`);

    if (dto.rutaId) {
      const ruta = await this.rutaRepository.findOne({
        where: { rutaId: dto.rutaId },
      });
      if (!ruta)
        throw new NotFoundException(`Ruta #${dto.rutaId} no encontrada`);
      mapa.ruta = ruta;
    }

    this.mapaRutasRepository.merge(mapa, dto);
    return await this.mapaRutasRepository.save(mapa);
  }

  async findAll(): Promise<MapaRutas[]> {
    return await this.mapaRutasRepository.find({ relations: ['ruta'] });
  }

  async findOne(id: number): Promise<MapaRutas> {
    const mapa = await this.mapaRutasRepository.findOne({
      where: { mapaId: id },
      relations: ['ruta'],
    });
    if (!mapa) throw new NotFoundException(`Mapa #${id} no encontrado`);
    return mapa;
  }

  async delete(id: number): Promise<void> {
    const mapa = await this.findOne(id);
    await this.mapaRutasRepository.remove(mapa);
  }
}
