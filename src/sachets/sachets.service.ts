import { Injectable } from '@nestjs/common';
import { CreateSachetDto } from './dto/create-sachet.dto';
import { UpdateSachetDto } from './dto/update-sachet.dto';

@Injectable()
export class SachetsService {
  create(createSachetDto: CreateSachetDto) {
    return 'This action adds a new sachet';
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
