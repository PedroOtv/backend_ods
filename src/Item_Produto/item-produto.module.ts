import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemProdutoController } from "./item-produto.controller";
import { ItemProdutoService } from "./item-produto.service";
import { ItemProduto } from "./entite/item-produtos.entity";
import { Pedido } from "src/Pedido/entite/pedido.entity";
import { PedidoModule } from "src/Pedido/pedido.module";

@Module({
    imports: [TypeOrmModule.forFeature([ItemProduto, Pedido]),PedidoModule ],
    controllers: [ItemProdutoController],
    providers: [ItemProdutoService],
})
export class ItemProdutoModule {}
