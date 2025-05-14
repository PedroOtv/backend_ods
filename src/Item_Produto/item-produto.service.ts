import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemProdutoDto } from './dto/create-item-produto.dto';
import { UpdateItemProdutoDto } from './dto/update-item-produto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemProduto } from './entities/item-produto.entity';

@Injectable()
export class ItemProdutoService {
  constructor(
    @InjectRepository(ItemProduto)
    private readonly itemProdutoRepository: Repository<ItemProduto>,
  ) {}

  async create(dto: CreateItemProdutoDto): Promise<ItemProduto> {
    const item = this.itemProdutoRepository.create(dto);
    return this.itemProdutoRepository.save(item);
  }

  async findAll(): Promise<ItemProduto[]> {
    return this.itemProdutoRepository.find();
  }

  async findOne(id: number): Promise<ItemProduto> {
    const item = await this.itemProdutoRepository.findOneBy({ id });
    if (!item) {
      throw new NotFoundException(`ItemProduto com ID ${id} não encontrado.`);
    }
    return item;
  }

  async update(id: number, dto: UpdateItemProdutoDto): Promise<ItemProduto> {
    const item = await this.findOne(id);
    const updated = Object.assign(item, dto);
    return this.itemProdutoRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const item = await this.findOne(id);
    await this.itemProdutoRepository.remove(item);
  }
}
