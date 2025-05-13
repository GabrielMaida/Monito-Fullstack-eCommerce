import { useEffect, useState } from "react";
import { IProductEntity } from "../../interfaces/IProductEntity";
import LightButton from "../utils/lightbutton.utils";

export default function WhatsNew() {
	const [dogs, setDogs] = useState<IProductEntity[]>([]);
	const endpoint = "/products/";

	useEffect(() => {
		fetch("http://localhost:3101/api/product?product=Dog")
			.then((response) => response.json())
			.then((data) => {
				setDogs(data);
			})
			.catch((error) => {
				console.error("Error fetching dogs:", error);
			});
	}, []);

	return (
		<section className="my-8 text-lg">
			<p className="text-base font-medium">What's new?</p>
			<header className="mb-5 flex flex-rowg text-[#003459] items-center">
				<h2 className="flex-1 font-bold text-xl">Take A Look At Some Of Our Pets</h2>
				<a href="/products">
					<LightButton text="View More" icon="arrow" />
				</a>
			</header>
			<div className="grid grid-cols-4 gap-6 text-[#00171F]">
				{dogs.slice(0, 8).map((dog) => (
					<a className="relative" href={endpoint + dog.sku}>
						<div key={dog.sku} className="w-full p-3 bg-white rounded-lg text-[1.05rem] shadow-md font-bold flex flex-col gap-2 transition-transform duration-300 hover:scale-105 hover:cursor-pointer">
							<img src={dog.images[0]} alt={dog.name} className="w-full aspect-square object-cover rounded-md" />
							<h3 className="mt-1">
								MO{dog.sku} - {dog.name}
							</h3>
							<p className="text-[#667479] text-xs tracking-wide">
								<span className="font-medium">Gene: </span>
								{dog.gender} • <span className="font-medium">Age: </span>
								{dog.age}
							</p>
							<p className="mb-2">{dog.price.toLocaleString()} VND</p>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}
