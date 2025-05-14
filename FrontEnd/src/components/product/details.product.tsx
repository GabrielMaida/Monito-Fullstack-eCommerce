import { useEffect, useState } from "react";
import { IProductEntity } from "../../interfaces/IProductEntity";
import Share from "../../assets/svgs/share.svg?react";
import Facebook from "../../assets/svgs/facebook.svg?react";
import Twitter from "../../assets/svgs/twitter.svg?react";
import Instagram from "../../assets/svgs/instagram.svg?react";
import Youtube from "../../assets/svgs/youtube.svg?react";
import Heart from "../../assets/svgs/heart.svg?react";
import DogCat from "../../assets/svgs/dogcat.svg?react";
import "../../styles/icons-color.css";
import DarkButton from "../utils/darkbutton.utils";
import LightButton from "../utils/lightbutton.utils";

export default function Details({ sku }: { sku?: string }) {
	const [product, setProduct] = useState<IProductEntity | null>(null);
	const [selectedImage, setSelectedImage] = useState<number>(0);

	if (!sku) {
		throw new Error("SKU is required");
	}

	useEffect(() => {
		if (sku) {
			fetch(`http://localhost:3101/api/product/${sku}`)
				.then((response) => response.json())
				.then((data) => {
					setProduct(data);
				})
				.catch((error) => {
					console.error("Error fetching product:", error);
				});
		}
	}, [sku]);

	const product_endpoint = "/products?product=" + product?.product;
	const size_endpoint = "/products?product=" + product?.product + "&size=";

	return (
		<>
			<div className="flex flex-row gap-10 border border-[#EBEEEF] rounded-[20px] p-3">
				<div className="w-1/2 flex flex-col gap-5 mb-5 items-start font-bold text-[#002A48]">
					<section>
						<img src={product?.images[selectedImage]} alt={product?.name} className="w-full aspect-[20/17] object-scale-down rounded-lg" />
					</section>

					<section className="flex gap-3 mb-3">
						{product?.images.map((image, index) => (
							<div key={index} onClick={() => setSelectedImage(index)} className={`w-20 h-20 rounded-md overflow-x-auto cursor-pointer border-2 ${selectedImage === index ? "border-[#003459]" : "border-transparent"}`}>
								<img src={image} alt={`${product?.name} view ${index + 1}`} className="w-full h-full object-cover" />
							</div>
						))}
					</section>

					<section className="flex flex-row text-[0.9rem] bg-[#fcedd2] w-1/1 justify-evenly items-center p-3 rounded-[10px]">
						<Heart />
						<p>100% health guarantee for pets</p>
						<DogCat />
						<p>100% guarantee of pet identification</p>
					</section>

					<aside className="flex flex-row gap-5">
						<div className="relative flex flex-row gap-2 items-center pl-2">
							<Share className="hover:cursor-pointer hover:hover:scale-105 transition-transform duration-300" />
							<p>Share:</p>
						</div>
						<div className="flex flex-row gap-5">
							<Facebook className="facebook hover:cursor-pointer" />
							<Twitter className="twitter hover:cursor-pointer" />
							<Instagram className="instagram hover:cursor-pointer" />
							<Youtube className="youtube hover:cursor-pointer" />
						</div>
					</aside>
				</div>

				<div className="w-1/2 flex flex-col gap-5">
					<div className="flex items-center text-sm text-[#667479]">
						<a href="/">
							<span className="hover:text-[#003459] hover:cursor-pointer">Home</span>
						</a>
						<span className="mx-2">&gt;</span>
						<a href={product_endpoint}>
							<span className="hover:text-[#003459] hover:cursor-pointer">{product?.product}</span>
						</a>
						<span className="mx-2">&gt;</span>
						<a href={size_endpoint + product?.size}>
							<span className="hover:text-[#003459] hover:cursor-pointer">
								{product?.size} {product?.product}
							</span>
						</a>
						<span className="mx-2">&gt;</span>
						<span className="text-[#00171F] hover:cursor-pointer hover:underline">{product?.name}</span>
					</div>

					<div className="flex flex-col">
						<p className="text-sm text-[#667479]">SKU #{product?.sku}</p>
						<h1 className="text-3xl font-bold text-[#003459] mb-2">{product?.name}</h1>
						<h2 className="text-2xl font-bold text-[#00171F]">{product?.price.toLocaleString()} VND</h2>
					</div>

					<div className="flex gap-4 font-bold">
						<DarkButton text="Contact Us" />
						<LightButton text="Chat With Monito" icon="arrow" />
					</div>

					<div className="grid grid-cols-2 gap-x-8 gap-y-4">
						{product &&
							Object.entries({
								Gender: product.gender ? "Yes" : "No",
								Age: product.age ? "Yes" : "No",
								Size: product.size,
								Color: product.color ? "Yes" : "No",
								Vaccinated: product.vaccinated ? "Yes" : "No",
								Dewormed: product.dewormed ? "Yes" : "No",
								Cert: product.cert ? "Yes (MKA)" : "No",
								Microchip: product.microchip ? "Yes" : "No",
								Location: product.location,
								"Published Date": product.publisheddate,
							}).map(([label, value]) => (
								<div key={label}>
									<p className="text-sm text-[#667479]">{label}</p>
									<p className="font-medium">&nbsp; {value}</p>
								</div>
							))}
					</div>
					<div>
						<p className="text-sm text-[#667479]">Additional Information</p>
						<div className="font-medium">
							<div>
								{product?.additionalinfo ? (
									product.additionalinfo
										.split(";")
										.slice()
										.map((info) => <p>&nbsp; {info}</p>)
								) : (
									<p>&nbsp;No additional Infos</p>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
