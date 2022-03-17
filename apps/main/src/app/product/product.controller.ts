import { Controller, Get, HttpService, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private httpService: HttpService
  ) {}

  @Get()
  async index() {
    return this.productService.all();
  }

  @EventPattern('product_created')
  async create(data) {
    this.productService.create(data);
  }

  @EventPattern('product_updated')
  async productUpdate(product) {
    this.productService.update(product.id, product);
  }

  @EventPattern('product_deleted')
  async productDeleted(id) {
    this.productService.delete(id);
  }

  @Post(':id/like')
  async likePost(@Param('id') id: number) {
    const product = await this.productService.findOne(id);
    this.httpService.post(''); //pass url
    return this.productService.update(id, { likes: product.likes + 1 });
  }
}
