import { IsOptional, IsInt, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateFormaPagamentoDto {
  @IsOptional()
  @IsInt()
  @Expose({ name: 'id_forma_pagamento' })
  id_forma_pagamento: number;

  @IsOptional()
  @IsString()
  @Expose({ name: 'nome_forma_pagamento' })
  nome_forma_pagamento: string;
}
