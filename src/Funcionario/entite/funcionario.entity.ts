import { PrimaryColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
//import { Empresa } from "./empresa.entity";

@Entity()
export class Funcionario {
  @PrimaryColumn()
  cpf: string;

  @Column({ type: 'text' })
  nome: string;

  @Column({ type: 'text' })
  telefone: string;

  @Column({ type: 'text', nullable: true })
  email?: string;

  @Column({ type: 'text' })
  endereco: string;

  @Column({ type: 'text' })
  contrato: string;

  @Column({ type: 'date' })
  data_pagamento: Date;

  @Column({ type: 'date' })
  data_ferias: Date;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  salario: number;

  @Column({ type: 'text' })
  senha: string;

  @Column({ type: 'text' })
  role: string;

  //@ManyToOne(() => Empresa)
  //@JoinColumn({ name: 'fk_empresa' })
  //empresa: Empresa;
}
