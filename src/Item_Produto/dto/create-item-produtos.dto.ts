import { IsOptional, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateItemProdutoDto {
  @IsOptional()
  @IsInt()
  @Expose({ name: 'id_lista_produto' })
  id_lista_produto: number;

  @IsOptional()
  @IsInt()
  @Expose({ name: 'fk_produto' })
  fk_produto: number;

  @IsOptional()
  @IsInt()
  @Expose({ name: 'fk_pedido' })
  fk_pedido: number;
}
