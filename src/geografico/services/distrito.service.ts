import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Distrito } from '../entities/distrito.entity';
import { UpdateDistritoDto } from '../dtos/update-distrito.dto';
import { Macrodistrito } from '../entities/macrodistrito.entity';
import { CreateDistritoDto } from '../dtos/create-distrito.dto';

@Injectable()
export class DistritoService {
  constructor(
    @InjectRepository(Distrito)
    private readonly distritoRepository: Repository<Distrito>,
    @InjectRepository(Macrodistrito)
    private readonly macrodistritoRepository: Repository<Macrodistrito>,
  ) {}

  async findAll(): Promise<Distrito[]> {
    return await this.distritoRepository.find({
      relations: ['macrodistrito'],
    });
  }

  async findOne(id: number): Promise<Distrito> {
    const distrito = await this.distritoRepository.findOne({
      where: { dist_id: id },
      relations: ['macrodistrito'],
    });
    if (!distrito) {
      throw new NotFoundException(`Distrito con ID ${id} no encontrado`);
    }
    return distrito;
  }

  async create(createDistritoDto: CreateDistritoDto): Promise<Distrito> {
    // Verificar que existe el macrodistrito
    const macrodistrito = await this.macrodistritoRepository.findOne({
      where: { macro_id: createDistritoDto.macroId },
    });
    if (!macrodistrito) {
      throw new NotFoundException(
        `Macrodistrito con ID ${createDistritoDto.macroId} no encontrado`,
      );
    }

    const nuevoDistrito = this.distritoRepository.create({
      distNro: createDistritoDto.distNro,
      distEstado: createDistritoDto.distEstado || 'A',
      macrodistrito: macrodistrito, // Asignamos la entidad completa
    });

    return await this.distritoRepository.save(nuevoDistrito);
  }

  async update(
    id: number,
    updateDistritoDto: UpdateDistritoDto,
  ): Promise<Distrito> {
    const distrito = await this.distritoRepository.findOne({
      where: { dist_id: id },
    });
    if (!distrito) {
      throw new NotFoundException(`Distrito con ID ${id} no encontrado`);
    }

    if (updateDistritoDto.macroId) {
      const macrodistrito = await this.macrodistritoRepository.findOne({
        where: { macro_id: updateDistritoDto.macroId },
      });
      if (!macrodistrito) {
        throw new NotFoundException(
          `Macrodistrito con ID ${updateDistritoDto.macroId} no encontrado`,
        );
      }
      distrito.macrodistrito = macrodistrito;
    }

    if (updateDistritoDto.distNro) {
      distrito.distNro = updateDistritoDto.distNro;
    }

    if (updateDistritoDto.distEstado) {
      distrito.distEstado = updateDistritoDto.distEstado;
    }

    return await this.distritoRepository.save(distrito);
  }

  async delete(id: number): Promise<void> {
    const distrito = await this.distritoRepository.findOne({
      where: { dist_id: id },
    });
    if (!distrito) {
      throw new NotFoundException(`Distrito con ID ${id} no encontrado`);
    }
    await this.distritoRepository.remove(distrito);
  }
}
