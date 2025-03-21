import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateFormDto } from '../dtos//formulario/update-formulario.dto';
import { FormDiagnostico } from '../entities/formulario.entity';

@Injectable()
export class FormularioService {
  constructor(
    @InjectRepository(FormDiagnostico)
    private readonly formRepository: Repository<FormDiagnostico>,
  ) {}

  async findAll(): Promise<FormDiagnostico[]> {
    return await this.formRepository.find();
  }

  async create(data: Partial<FormDiagnostico>): Promise<FormDiagnostico> {
    const expediente = this.formRepository.create(data);
    return await this.formRepository.save(expediente);
  }

  async update(id: number, data: UpdateFormDto): Promise<FormDiagnostico> {
    const formDiagnostico = await this.formRepository.findOne({
      where: { form_id: id },
    });
    if (!formDiagnostico) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }
    this.formRepository.merge(formDiagnostico, data);
    return await this.formRepository.save(formDiagnostico);
  }

  async delete(id: number): Promise<void> {
    const formDiagnostico = await this.formRepository.findOne({
      where: { form_id: id },
    });
    if (!formDiagnostico) {
      throw new NotFoundException(`Formulario con ID ${id} no encontrado`);
    }
    await this.formRepository.delete(id);
  }
}
