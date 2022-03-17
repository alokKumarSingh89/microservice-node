import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy
  ) {}
  @Get()
  async index() {
    return this.productService.all();
  }

  @Post()
  async create(@Body('title') title: string, @Body('image') image: string) {
    const product = await this.productService.create({ title, image });
    this.client.emit('product_created', product);
    return product;
  }

  @Get(':id')
  async get(@Param('id') id: number) {
    return this.productService.get(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('image') image: string
  ) {
    const product = await this.productService.update(id, { title, image });
    this.client.emit('product_updated', product);
    return product;
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    this.client.emit('product_deleted', id);
    return this.productService.delete(id);
  }

  @Post(':id/like')
  async likePost(@Param('id') id: number, @Body('likes') likes: number) {
    const product = await this.productService.get(id);
    this.productService.update(id, { like: product.like });
    return product;
  }
}
