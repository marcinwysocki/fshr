import { IsEnum, IsNumber } from 'class-validator';

export enum WeightUnit {
  Grams = 'g',
  Kilograms = 'kg',
}

export class Weight {
  @IsNumber()
  value: number;

  @IsEnum(WeightUnit)
  unit: WeightUnit;
}
