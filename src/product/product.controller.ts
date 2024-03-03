import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ProductService } from "./product.service";
import { Prisma } from "@prisma/client";

@Controller("products")
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  create(@Body() Dto: Prisma.ProductCreateInput) {
    return this.productService.create(Dto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() Dto: Prisma.ProductUpdateInput) {
    return this.productService.update(+id, Dto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.productService.remove(+id);
  }
}
