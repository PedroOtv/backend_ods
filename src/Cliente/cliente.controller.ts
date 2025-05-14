import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './entite/cliente.entity';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post()
  create(@Body() cliente: Cliente) {
    return this.clienteService.create(cliente);
  }

  @Get()
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':cpf_cnpj')
  findOne(@Param('cpf_cnpj') cpf_cnpj: string) {
    return this.clienteService.findOne(cpf_cnpj);
  }

  @Put(':cpf_cnpj')
  update(@Param('cpf_cnpj') cpf_cnpj: string, @Body() cliente: Cliente) {
    return this.clienteService.update(cpf_cnpj, cliente);
  }

  @Delete(':cpf_cnpj')
  remove(@Param('cpf_cnpj') cpf_cnpj: string) {
    return this.clienteService.remove(cpf_cnpj);
  }
}
