import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FormaPagamentoController } from "./forma-pagamento.controller";
import { FormaPagamentoService } from "./forma-pagamento.service";
import { FormaPagamento } from "./entite/forma-pagamento.entity";

@Module({
    imports: [TypeOrmModule.forFeature([FormaPagamento])],
    controllers: [FormaPagamentoController],
    providers: [FormaPagamentoService],
})
export class FormaPagamentoModule {}
