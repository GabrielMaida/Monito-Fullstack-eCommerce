import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { ProductService } from "./services/product.service";
import { IProductEntity } from "./interfaces/IProductEntity";

@Controller("product")
export class ProductController {
	constructor(private readonly productService: ProductService) {}

	@Get()
	getProductsWithQuery(
		@Query("product") product?: string,
		@Query("exclude") exclude?: string,
		@Query("gender") gender?: string,
		@Query("color") color?: string,
		@Query("size") size?: string,
		@Query("page") page: number = 1,
		@Query("limit") limit: number = 10
	): Promise<IProductEntity[]> {
		return this.productService.getProductsWithQuery(
			product,
			exclude,
			gender,
			color,
			size,
			page,
			limit
		);
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
