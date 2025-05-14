import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSourceOptions from './database.config';
import { ClienteModule } from './Cliente/cliente.module';
import { FormaPagamentoModule } from './Forma_Pagamento/forma-pagamento.module';
import { FuncionarioModule } from './Funcionario/funcionario.module';
import { ItemProdutoModule } from './Item_Produto/item-produto.module';
import { PedidoModule } from './Pedido/pedido.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions.options),
    ClienteModule,
    FormaPagamentoModule, 
    FuncionarioModule,
    ItemProdutoModule,
    PedidoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
