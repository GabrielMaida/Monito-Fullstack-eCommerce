export interface IProductEntity {
	sku: string;
	name: string;
	price: number;
	gender?: string;
	age?: string;
	size?: string;
	color?: string;
	vaccinated?: boolean;
	dewormed?: boolean;
	cert?: boolean;
	microchip?: boolean;
	location?: string;
	publisheddate: string;
	additionalinfo?: string;
	images: string[];
	product: string;
	promo?: string;
}
