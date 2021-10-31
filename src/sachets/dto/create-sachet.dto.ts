import { IsString, ValidateNested } from 'class-validator';
import { Weight } from 'src/domain/weight';

export class CreateSachetDto {
  @IsString()
  brand: string;

  @IsString()
  name: string;

  @ValidateNested()
  weight: Weight;
}
