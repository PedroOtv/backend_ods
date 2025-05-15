import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entite/pedido.entity';
import { CreatePedidoDto } from './dto/create-pedido.dto';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) { }

  async create(dto: CreatePedidoDto): Promise<Pedido> {
    const pedido = this.pedidoRepository.create(dto);
    return this.pedidoRepository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find({ relations: ['cliente', 'funcionario', 'forma_pagamento', 'itensProduto'] });
  }

  async findOne(id_pedido: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne({
      where: { id_pedido },
      relations: ['cliente', 'funcionario', 'forma_pagamento', 'itensProduto'],
    });

    if (!pedido) {
      throw new NotFoundException(`Pedido com ID ${id_pedido} não encontrado.`);
    }
    return pedido;
  }


}
