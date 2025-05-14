import { Injectable, NotFoundException } from "@nestjs/common";
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
		exclude?: string,
		gender?: string,
		color?: string,
		size?: string,
		page: number = 1,
		limit: number = 6
	): Promise<IProductEntity[]> {
		let filter: any = {};

		if (product) filter.product = product;
		if (exclude) filter.product = { $ne: exclude };
		if (gender) filter.gender = gender;
		if (color) filter.color = color;
		if (size) filter.size = size;

		const skip = (page - 1) * limit;

		const productsReturned = await this.productModel
			.find(filter)
			.skip(skip)
			.limit(limit)
			.exec();

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
			throw new NotFoundException("No matching product found");
		}
		return productsReturned.toObject();
	}

	async createProduct(product: IProductEntity): Promise<IProductEntity> {
		const createdEvent = new this.productModel(product);
		await createdEvent.save();
		return createdEvent.toObject();
	}
}
