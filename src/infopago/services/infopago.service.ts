import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InformacionPago } from '../entities/infopago.entity';
import { Igob } from '../../sistema/entities/igob.entity';
import { CreateInformacionPagoDto } from '../dots/create-infopago.dto';
import { UpdateInformacionPagoDto } from '../dots/update-infopago.dto';

@Injectable()
export class InfopagoService {
  constructor(
    @InjectRepository(InformacionPago)
    private readonly infoPagoRepository: Repository<InformacionPago>,
    @InjectRepository(Igob)
    private readonly igobRepository: Repository<Igob>,
  ) {}

  async findAll(): Promise<InformacionPago[]> {
    return await this.infoPagoRepository.find({ relations: ['igob'] });
  }

  async findOne(id: number): Promise<InformacionPago> {
    const pago = await this.infoPagoRepository.findOne({
      where: { infoPagoId: id },
      relations: ['igob'],
    });
    if (!pago) throw new NotFoundException(`Pago #${id} no encontrado`);
    return pago;
  }

  async create(dto: CreateInformacionPagoDto): Promise<InformacionPago> {
    const igob = await this.igobRepository.findOne({
      where: { igobId: dto.igobId },
    });
    if (!igob)
      throw new NotFoundException(`Registro Igob #${dto.igobId} no encontrado`);

    const newPago = this.infoPagoRepository.create({
      infoPagoEstado: dto.infoPagoEstado || 'A',
      infoPagoMonto: dto.infoPagoMonto,
      infoPagoDescripcion: dto.infoPagoDescripcion,
      igob,
    });

    return await this.infoPagoRepository.save(newPago);
  }

  async update(
    id: number,
    dto: UpdateInformacionPagoDto,
  ): Promise<InformacionPago> {
    const pago = await this.infoPagoRepository.findOne({
      where: { infoPagoId: id },
      relations: ['igob'],
    });
    if (!pago) throw new NotFoundException(`Pago #${id} no encontrado`);

    if (dto.igobId) {
      const igob = await this.igobRepository.findOne({
        where: { igobId: dto.igobId },
      });
      if (!igob)
        throw new NotFoundException(
          `Registro Igob #${dto.igobId} no encontrado`,
        );
      pago.igob = igob;
    }

    this.infoPagoRepository.merge(pago, dto);
    return await this.infoPagoRepository.save(pago);
  }

  async delete(id: number): Promise<void> {
    const pago = await this.findOne(id);
    await this.infoPagoRepository.remove(pago);
  }
}
