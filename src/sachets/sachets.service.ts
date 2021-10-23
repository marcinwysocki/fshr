import { Injectable } from '@nestjs/common';
import { CreateSachetDto } from './dto/create-sachet.dto';
import { UpdateSachetDto } from './dto/update-sachet.dto';
import { Sachet } from './entities/sachet.entity';

@Injectable()
export class SachetsService {
  private readonly sachets: Sachet[] = [];

  async create({ brand, name, weight }: CreateSachetDto) {
    const sachet = new Sachet(brand, name, weight);

    this.sachets.push(sachet);

    return sachet;
  }

  findAll() {
    return `This action returns all sachets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sachet`;
  }

  update(id: number, updateSachetDto: UpdateSachetDto) {
    return `This action updates a #${id} sachet`;
  }

  remove(id: number) {
    return `This action removes a #${id} sachet`;
  }
}
