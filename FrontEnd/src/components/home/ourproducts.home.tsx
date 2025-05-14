import { useEffect, useState } from "react";
import { IProductEntity } from "../../interfaces/IProductEntity";
import LightButton from "../utils/lightbutton.utils";
import GiftIcon from "../../assets/svgs/gift.svg?react";

export default function OurProducts() {
	const [products, setProducts] = useState<IProductEntity[]>([]);
	const endpoint = "/products/";

	useEffect(() => {
		fetch("http://localhost:3101/api/product?exclude=Dog")
			.then((response) => response.json())
			.then((data) => {
				setProducts(data);
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
			});
	}, []);

	return (
		<section className="my-8 text-lg" id="ourproducts">
			<p className="text-base font-medium">What's new?</p>
			<header className="mb-5 flex flex-rowg text-[#003459] text-[16px] items-center">
				<h2 className="flex-1 font-bold text-[24px]">Take A Look At Some Of Our Pets</h2>
				<a href="/products">
					<LightButton text="View More" icon="arrow" />
				</a>
			</header>
			<div className="grid grid-cols-4 gap-6 text-[#00171F]">
				{products.slice(0, 8).map((product) => (
					<a className="relative" href={endpoint + product.sku}>
						<div key={product.sku} className="w-full h-full p-3 bg-white rounded-lg text-[1.05rem] shadow-md font-bold flex flex-col gap-2 transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
							<img src={product.images[0]} alt={product.name} className="w-full aspect-square object-cover rounded-md" />
							<h3 className="mt-1">
								MO{product.sku} - {product.name}
							</h3>
							<p className="text-[#667479] text-xs tracking-wide">
								<span className="font-medium">Product: </span>
								{product.product} • <span className="font-medium">Size: </span>
								{product.size}
							</p>
							<p className="mb-2">{product.price.toLocaleString()} VND</p>
							<div className="flex flex-row bg-[#FCEED5] rounded-[8px] py-1 px-3 items-center text-[#002A48] font-bold">
								<GiftIcon />
								<p>&nbsp;&nbsp;•&nbsp;&nbsp;{product.promo}</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
