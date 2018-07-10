import { Controller, Get, Post, Body,Put, Param, Delete, Res, HttpStatus, HttpException} from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cats.interface';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() CreateCatDto, @Res() res) {

    if(!CreateCatDto.name) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, 403);
    }
    
    await this.catsService.create(CreateCatDto);

    res.status(HttpStatus.CREATED).send({ success: 'created Cat Success!'});

  }

  @Get()
  async findAll(@Res() res) {
    const cats: Cat[] = await this.catsService.findAll();
    res.send({ cats });
  }

  @Put(':id')
  async update(@Param('id') id, @Body() updateCatDto, @Res() res) {
    if(!updateCatDto.name) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, 403);
    }

    await this.catsService.updateById(id, updateCatDto);

    res.status(HttpStatus.CREATED).send({ success: 'updated Cat Success!'});
  }

  @Get(':id')
    async findOne(@Param('id') id, @Res() res) {
    
    const cat: Cat = await this.catsService.findOne(id);
    res.status(HttpStatus.CREATED).send({ cat });
  }

  @Delete(':id')
  async remove(@Param('id') id, @Res() res) {
    await this.catsService.removeById(id);
    res.status(HttpStatus.CREATED).send({ success: 'deleted Cat Success!'});
  }
}