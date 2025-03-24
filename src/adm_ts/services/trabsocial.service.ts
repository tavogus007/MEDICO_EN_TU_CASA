import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TrabajoSocial } from '../entities/trabajoSoclal.entity';
import { CreateTrabajoSocialDto } from '../dtos/create-trabsoc.dto';
import { UpdateTrabajoSocialDto } from '../dtos/update-trabsoc.dto';

@Injectable()
export class TrabsocialService {
  constructor(
    @InjectRepository(TrabajoSocial)
    private readonly mecTrabSocRepository: Repository<TrabajoSocial>,
  ) {}

  async findAll(): Promise<TrabajoSocial[]> {
    return this.mecTrabSocRepository.find({
      relations: [],
    });
  }

  async findOne(id: number): Promise<TrabajoSocial> {
    return this.mecTrabSocRepository.findOne({
      where: { ts_id: id },
    });
  }

  async create(dto: CreateTrabajoSocialDto): Promise<TrabajoSocial> {
    const newAdmision = this.mecTrabSocRepository.create(dto);
    return this.mecTrabSocRepository.save(newAdmision);
  }

  async update(
    id: number,
    dto: UpdateTrabajoSocialDto,
  ): Promise<TrabajoSocial> {
    await this.mecTrabSocRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.mecTrabSocRepository.delete(id);
  }
}
