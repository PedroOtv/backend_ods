import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from "typeorm";
//import { Produto } from "./produto.entity";
import { Pedido } from "src/Pedido/entite/pedido.entity";

@Entity()
export class ItemProduto {
  @PrimaryGeneratedColumn()
  id_lista_produto: number;

  //@ManyToOne(() => Produto)
  //@JoinColumn({ name: 'fk_produto' })
  //produto: Produto;

  @ManyToOne(() => Pedido)
  @JoinColumn({ name: 'fk_pedido' })
  pedido: Pedido;
}
