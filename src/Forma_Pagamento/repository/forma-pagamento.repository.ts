import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormaPagamento } from '../entitie/formaPagamento.entity';

@Injectable()
export class FormaPagamentoRepository {
  constructor(
    @InjectRepository(FormaPagamento)
    private readonly repository: Repository<FormaPagamento>,
  ) {}

  findAll(): Promise<FormaPagamento[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<FormaPagamento | null> {
    return this.repository.findOne({ where: { id } });
  }

  create(data: FormaPagamento): Promise<FormaPagamento> {
    return this.repository.save(data);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
