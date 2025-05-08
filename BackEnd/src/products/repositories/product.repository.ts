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

	async getAllProducts(): Promise<IProductEntity[]> {
		return await this.productModel.find().exec();
	}

	async getProductBySku(sku: string): Promise<IProductEntity> {
		const productReturned = await this.productModel.findOne({ sku }).exec();
		if (!productReturned) {
			throw new Error("Product not found");
		}
		return productReturned.toObject();
	}

	async createProduct(product: IProductEntity): Promise<IProductEntity> {
		const createdEvent = new this.productModel(product);
		await createdEvent.save();
		return createdEvent.toObject();
	}
}
