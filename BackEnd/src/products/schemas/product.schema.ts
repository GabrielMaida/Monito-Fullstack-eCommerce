import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
	@Prop({ required: true }) sku: string;
	@Prop({ required: true }) name: string;
	@Prop({ required: true }) price: number;
	@Prop({ required: false, enum: ["Male", "Female"] }) gender?: string;
	@Prop({ required: false, enum: ["2 Months"] }) age?: string;
	@Prop({ required: false }) size?: string;
	@Prop({ required: false }) color?: string;
	@Prop({ required: false }) vaccinated?: boolean;
	@Prop({ required: false }) dewormed?: boolean;
	@Prop({ required: false }) cert?: boolean;
	@Prop({ required: false }) microchip?: boolean;
	@Prop({ required: false, enum: ["Vietnam"] }) location?: string;
	@Prop({ required: true }) publisheddate: string;
	@Prop({ required: false }) additionalinfo?: string;
	@Prop({ required: true }) images: string[];
	@Prop({ required: true }) product: string;
	@Prop({ required: false }) promo?: string;
}

export const productSchema = SchemaFactory.createForClass(Product);
