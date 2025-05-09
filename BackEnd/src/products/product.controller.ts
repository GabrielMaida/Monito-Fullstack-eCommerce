import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ProductService } from "./services/product.service";
import { IProductEntity } from "./interfaces/IProductEntity";

@Controller("product")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	getProductsWithQuery(
		@Query("product") product?: string,
		@Query("exclude") exclude?: string
	): Promise<IProductEntity[]> {
		return this.productService.getProductsWithQuery(product, exclude);
	}

	@Get(":sku")
	getProductBySku(@Param("sku") sku: string): Promise<IProductEntity> {
		return this.productService.getProductBySku(sku);
	}

	@Post()
	async createProduct(
		@Body() product: IProductEntity
	): Promise<IProductEntity> {
		return this.productService.createProduct(product);
	}
}
