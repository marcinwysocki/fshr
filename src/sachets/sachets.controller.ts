import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SachetsService } from './sachets.service';
import { CreateSachetDto } from './dto/create-sachet.dto';
import { UpdateSachetDto } from './dto/update-sachet.dto';

@Controller('sachets')
export class SachetsController {
  constructor(private readonly sachetsService: SachetsService) {}

  @Post()
  async create(@Body() createSachetDto: CreateSachetDto) {
    return this.sachetsService.create(createSachetDto);
  }

  @Get()
  findAll() {
    return this.sachetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sachetsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSachetDto: UpdateSachetDto) {
    return this.sachetsService.update(+id, updateSachetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sachetsService.remove(+id);
  }
}
