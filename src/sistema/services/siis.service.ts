import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { SiisWeb } from '../entities/siis.entity';
import { UpdateSiisWebDto } from '../dtos/siis-update.dto';

@Injectable()
export class SiisService {
  constructor(
    @InjectRepository(SiisWeb)
    private readonly mecSiisWebRepository: Repository<SiisWeb>,
  ) {}

  async create(data: Partial<SiisWeb>): Promise<SiisWeb> {
    const newEntity = this.mecSiisWebRepository.create(data);
    return await this.mecSiisWebRepository.save(newEntity);
  }

  async update(id: number, updateDto: UpdateSiisWebDto): Promise<SiisWeb> {
    const entity = await this.mecSiisWebRepository.findOneBy({ siisWebId: id });

    if (!entity) {
      throw new Error('Registro no encontrado');
    }

    entity.siisWebEstado = updateDto.siisWebEstado;
    return await this.mecSiisWebRepository.save(entity);
  }

  async findOne(id: number): Promise<SiisWeb> {
    const entity = await this.mecSiisWebRepository.findOneBy({ siisWebId: id });

    if (!entity) {
      throw new Error('Registro no encontrado');
    }
    return entity;
  }

  async findAll(): Promise<SiisWeb[]> {
    return await this.mecSiisWebRepository.find();
  }

  async delete(id: number): Promise<void> {
    await this.mecSiisWebRepository.delete(id);
  }
}
