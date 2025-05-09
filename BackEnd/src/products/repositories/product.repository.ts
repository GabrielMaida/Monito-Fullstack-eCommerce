import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Product, ProductDocument } from "../schemas/product.schema";
import { IProductEntity } from "../interfaces/IProductEntity";
import { Model } from "mongoose";

@Injectable()
export class ProductRepository {
	constructor(
		@InjectModel(Product.name) private productModel: Model<ProductDocument>
	) {}

	async getProductsWithQuery(
		product?: string,
		exclude?: string
	): Promise<IProductEntity[]> {
		let filter = {};

		if (product) {
			filter = { product: product };
		} else if (exclude) {
			filter = { product: { $ne: exclude } };
		}

		const productsReturned = await this.productModel.find(filter).exec();

		if (!productsReturned || productsReturned.length === 0) {
			throw new NotFoundException("No matching products found");
		}

		return productsReturned.map((product) => product.toObject());
	}

	async getProductBySku(sku: string): Promise<IProductEntity> {
		const productsReturned = await this.productModel
			.findOne({ sku })
			.exec();
		if (!productsReturned) {
			throw new Error("No matching product found");
		}
		return productsReturned.toObject();
	}

	async createProduct(product: IProductEntity): Promise<IProductEntity> {
		const createdEvent = new this.productModel(product);
		await createdEvent.save();
		return createdEvent.toObject();
	}
}
