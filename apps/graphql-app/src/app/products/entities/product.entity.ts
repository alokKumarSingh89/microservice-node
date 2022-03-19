import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Product ID' })
  id: number;

  @Column()
  @Field()
  name: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  image1?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  image2?: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  image3?: string;

  @Column()
  @Field()
  brand: string;

  @Column()
  @Field()
  color: string;

  @Column()
  @Field()
  price: number;
}
