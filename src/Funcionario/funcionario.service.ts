import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFuncionarioDto } from './dto/create-funcionario.dto';
import { UpdateFuncionarioDto } from './dto/update-funcionario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Funcionario } from './entities/funcionario.entity';

@Injectable()
export class FuncionarioService {
  constructor(
    @InjectRepository(Funcionario)
    private readonly funcionarioRepository: Repository<Funcionario>,
  ) {}

  async create(dto: CreateFuncionarioDto): Promise<Funcionario> {
    const funcionario = this.funcionarioRepository.create(dto);
    return this.funcionarioRepository.save(funcionario);
  }

  async findAll(): Promise<Funcionario[]> {
    return this.funcionarioRepository.find();
  }

  async findOne(id: number): Promise<Funcionario> {
    const funcionario = await this.funcionarioRepository.findOneBy({ id });
    if (!funcionario) {
      throw new NotFoundException(`Funcionário com ID ${id} não encontrado.`);
    }
    return funcionario;
  }

  async update(id: number, dto: UpdateFuncionarioDto): Promise<Funcionario> {
    const funcionario = await this.findOne(id);
    const updated = Object.assign(funcionario, dto);
    return this.funcionarioRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const funcionario = await this.findOne(id);
    await this.funcionarioRepository.remove(funcionario);
  }
}
