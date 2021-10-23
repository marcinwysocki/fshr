import { PartialType } from '@nestjs/mapped-types';
import { CreateSachetDto } from './create-sachet.dto';

export class UpdateSachetDto extends PartialType(CreateSachetDto) {}
