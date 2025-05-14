import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from '../entitie/funcionario.entity';

@Injectable()
export class FuncionarioRepository {
  constructor(
    @InjectRepository(Funcionario)
    private readonly repository: Repository<Funcionario>,
  ) {}

  findAll(): Promise<Funcionario[]> {
    return this.repository.find();
  }

  findOne(id: number): Promise<Funcionario | null> {
    return this.repository.findOne({ where: { id } });
  }

  create(data: Funcionario): Promise<Funcionario> {
    return this.repository.save(data);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
