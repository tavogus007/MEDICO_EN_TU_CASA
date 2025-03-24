// mec-admisiones.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Admisiones } from '../entities/admisiones.entity';
import { CreateAdmisionDto } from '../dtos/create-admision.dto';
import { UpdateAdmisionDto } from '../dtos/update-admision.dto';

@Injectable()
export class AdmisionesService {
  constructor(
    @InjectRepository(Admisiones)
    private readonly mecAdmisionesRepository: Repository<Admisiones>,
  ) {}

  async findAll(): Promise<Admisiones[]> {
    return this.mecAdmisionesRepository.find({
      relations: [],
    });
  }

  async findOne(id: number): Promise<Admisiones> {
    return this.mecAdmisionesRepository.findOne({
      where: { admision_id: id },
    });
  }

  async create(dto: CreateAdmisionDto): Promise<Admisiones> {
    const newAdmision = this.mecAdmisionesRepository.create(dto);
    return this.mecAdmisionesRepository.save(newAdmision);
  }

  async update(id: number, dto: UpdateAdmisionDto): Promise<Admisiones> {
    await this.mecAdmisionesRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.mecAdmisionesRepository.delete(id);
  }
}
