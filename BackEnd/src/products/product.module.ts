import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, productSchema } from "./schemas/product.schema";
import { ProductRepository } from "./repositories/product.repository";
import { ProductService } from "./services/product.service";
import { ProductController } from "./product.controller";

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: Product.name, schema: productSchema },
		]),
	],
	controllers: [ProductController],
	providers: [ProductRepository, ProductService],
	exports: [ProductRepository, ProductService],
})
export class ProductModule {}
