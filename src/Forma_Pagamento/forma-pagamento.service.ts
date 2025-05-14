import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFormaPagamentoDto } from './dto/create-forma-pagamento.dto';
import { UpdateFormaPagamentoDto } from './dto/update-forma-pagamento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormaPagamento } from './entities/forma-pagamento.entity';

@Injectable()
export class FormaPagamentoService {
  constructor(
    @InjectRepository(FormaPagamento)
    private readonly formaPagamentoRepository: Repository<FormaPagamento>,
  ) {}

  async create(dto: CreateFormaPagamentoDto): Promise<FormaPagamento> {
    const novaForma = this.formaPagamentoRepository.create(dto);
    return this.formaPagamentoRepository.save(novaForma);
  }

  async findAll(): Promise<FormaPagamento[]> {
    return this.formaPagamentoRepository.find();
  }

  async findOne(id: number): Promise<FormaPagamento> {
    const forma = await this.formaPagamentoRepository.findOneBy({ id });
    if (!forma) {
      throw new NotFoundException(`Forma de pagamento ${id} não encontrada.`);
    }
    return forma;
  }

  async update(id: number, dto: UpdateFormaPagamentoDto): Promise<FormaPagamento> {
    const forma = await this.findOne(id);
    const updated = Object.assign(forma, dto);
    return this.formaPagamentoRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const forma = await this.findOne(id);
    await this.formaPagamentoRepository.remove(forma);
  }
}
