import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  image1?: string;

  @Field({ nullable: true })
  image2?: string;

  @Field({ nullable: true })
  image3?: string;

  @Field()
  brand: string;

  @Field()
  color: string;

  @Field()
  price: number;
}
