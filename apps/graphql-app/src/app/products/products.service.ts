import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly prodRepo: Repository<Product>
  ) {
    console.log('Product Service created');
  }
  create(createProductInput: CreateProductInput) {
    return this.prodRepo.save(createProductInput);
  }

  findAll() {
    return this.prodRepo.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
