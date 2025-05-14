import { PrimaryColumn, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
  @PrimaryColumn()
  cpf_cnpj: string;

  @Column({ type: 'text'})
  nome: string;

  @Column({ type: 'text', nullable: true})
  email?: string;

  @Column({ type: 'text'})
  telefone: string;

  @Column({ type: 'text'})
  endereco: string;
}
