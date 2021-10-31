import { IsString, ValidateNested } from 'class-validator';
import { Weight } from 'src/domain/weight';

export class Sachet {
  @IsString()
  public readonly brand: string;

  @IsString()
  public readonly name: string;

  @ValidateNested()
  public readonly weight: Weight;

  constructor(brand: string, name: string, weight: Weight) {
    this.brand = brand;
    this.name = name;
    this.weight = weight;
  }
}
