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

  @ManyToOne(() => Pedido, pedido => pedido.itensProduto)
  @JoinColumn({ name: 'fk_pedido_id' })
  pedido: Pedido;

  //@ManyToOne(() => Produto, produto => produto.itensProduto)
  //@JoinColumn({ name: 'fk_produto_id' })
  //produto: Produto;
}

//colocar na entidade de produto
//@OneToMany(() => ItemProduto, itemProduto => itemProduto.produto)
//itensProduto: ItemProduto[];