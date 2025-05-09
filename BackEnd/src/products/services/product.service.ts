import { Injectable } from "@nestjs/common";
import { IProductEntity } from "../interfaces/IProductEntity";
import { ProductRepository } from "../repositories/product.repository";

@Injectable()
export class ProductService {
	constructor(private readonly productRepository: ProductRepository) {}

	async getProductsWithQuery(
		product?: string,
		exclude?: string
	): Promise<IProductEntity[]> {
		return await this.productRepository.getProductsWithQuery(
			product,
			exclude
		);
	}

	async getProductBySku(sku: string): Promise<IProductEntity> {
		return await this.productRepository.getProductBySku(sku);
	}

	async createProduct(product: IProductEntity): Promise<IProductEntity> {
		let newEvent = await this.productRepository.createProduct(product);

		return newEvent;
	}
}
