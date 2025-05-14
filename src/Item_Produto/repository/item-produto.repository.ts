import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemProduto } from '../entitie/itemProduto.entity';

@Injectable()
export class ItemProdutoRepository {
  constructor(
    @InjectRepository(ItemProduto)
    private readonly repository: Repository<ItemProduto>,
  ) {}

  findAll(): Promise<ItemProduto[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<ItemProduto | null> {
    return this.repository.findOne({ where: { id } });
  }

  create(data: ItemProduto): Promise<ItemProduto> {
    return this.repository.save(data);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
