import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class FormaPagamento {
  @PrimaryGeneratedColumn()
  id_forma_pagamento: number;

  @Column({ type: 'text' })
  nome_forma_pagamento: string;
}
