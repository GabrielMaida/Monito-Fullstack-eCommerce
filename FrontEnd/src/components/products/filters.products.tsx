import { useEffect, useState } from "react";
import { IProductEntity } from "../../interfaces/IProductEntity";
import OpenDown from "../../assets/svgs/opendown.svg?react";
import "../../styles/opendownbutton.css";

export default function Filters() {
	const [products, setProducts] = useState<IProductEntity[]>([]);
	const [filters, setFilters] = useState({
		gender: "",
		color: "",
		size: "",
		page: 1,
		limit: 6,
	});
	const img_url = ["./svgs/red.svg", "./svgs/apricot.svg", "./svgs/black.svg", "./svgs/blackwhite.svg", "./svgs/silver.svg", "./svgs/tan.svg"];
	const endpoint = "/products/";

	useEffect(() => {
		const query = new URLSearchParams(filters as any).toString();
		fetch(`http://localhost:3101/api/product?product=Dog&${query}`)
			.then((response) => response.json())
			.then((data) => {
				if (Array.isArray(data) && data.length > 0) {
					setProducts(data);
				} else {
					setProducts([]);
				}
			})
			.catch((error) => {
				console.error("Error fetching products:", error);
				setProducts([]);
			});
	}, [filters]);

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFilters((prev) => ({
			...prev,
			[name as keyof typeof filters]: prev[name as keyof typeof filters] === value ? "" : value,
		}));
	};

	return (
		<div className="flex flex-row justify-between gap-8">
			<aside className="w-1/4 rounded-lg">
				<h2 className="text-2xl text-[#003459] font-bold">Filter</h2>
				<form className="text-base font-medium mb-5">
					<div className="border-b border-[#ebeeef] py-3">
						<h3 className="text-lg font-bold mb-2">Gender</h3>
						<div className="space-y-2">
							<label className="flex items-center gap-2 hover:cursor-pointer">
								<input type="checkbox" name="gender" value="Male" checked={filters.gender === "Male"} onChange={handleFilterChange} />
								Male
							</label>
							<label className="flex items-center gap-2 hover:cursor-pointer">
								<input type="checkbox" name="gender" value="Female" checked={filters.gender === "Female"} onChange={handleFilterChange} />
								Female
							</label>
						</div>
					</div>
					<div className="border-b border-[#ebeeef] py-3">
						<h3 className="text-lg font-bold mb-2">Color</h3>
						<div className="space-y-2">
							{["Red", "Apricot", "Black", "Black & White", "Silver", "Tan"].map((color, i) => (
								<label key={color} className="flex items-center gap-2 hover:cursor-pointer">
									<input type="checkbox" name="color" value={color} checked={filters.color === color} onChange={handleFilterChange} />
									<img src={img_url[i]} alt={color} />
									{color}
								</label>
							))}
						</div>
					</div>
					<div className="border-b border-[#ebeeef] py-3">
						<h3 className="text-lg font-bold mb-2">Price</h3>
						<div className="flex items-center gap-2">
							<input type="number" placeholder="Min" className="w-1/2 border border-gray-300 rounded-lg p-2" />
							<span>-</span>
							<input type="number" placeholder="Max" className="w-1/2 border border-gray-300 rounded-lg p-2" />
						</div>
					</div>
					<div className="border-b border-[#ebeeef] py-3">
						<h3 className="text-lg font-bold mb-2">Breed</h3>
						<div className="space-y-2">
							{["Small", "Medium", "Large"].map((size) => (
								<label key={size} className="flex items-center gap-2 hover:cursor-pointer">
									<input type="checkbox" name="size" value={size} checked={filters.size === size} onChange={handleFilterChange} />
									{size}
								</label>
							))}
						</div>
					</div>
				</form>
			</aside>
			<main className="flex-1">
				<div className="flex flex-row gap-5 items-baseline mb-3">
					<h1 className="text-2xl font-bold text-[#003459]">Dogs</h1>
					<p className="flex-1 text-[#667479] text-sm">{products.length} puppies</p>
					<button className="opendownbutton border-2 border-[#667479] rounded-full py-1 px-5 text-[#667479] flex flex-row gap-4 items-center hover:bg-[#667479] hover:text-white hover:cursor-pointer">
						<p>Sort by: Recent</p>
						<OpenDown />
					</button>
				</div>
				<div className="grid grid-cols-3 gap-6">
					{products.map((product) => (
						<a href={endpoint + product.sku}>
							<div key={product.sku} className="w-full h-full px-4 py-2 rounded-lg text-[1.05rem] font-bold flex flex-col gap-2 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
								<img src={product.images[0]} alt={product.name} className="aspect-square object-cover rounded-md mb-2" />
								<h2>
									MO{product.sku} - {product.name}
								</h2>
								<p className="text-[#667479] text-xs tracking-wide">
									<span className="font-medium">Gene: </span>
									{product.gender} •<span className="font-medium"> Age: </span> {product.age}
								</p>
								<p className="mb-2">{product.price.toLocaleString()} VND</p>
							</div>
						</a>
					))}
				</div>
				<footer className="flex justify-between mt-8 mb-12">
					<button
						onClick={() =>
							setFilters((prev) => ({
								...prev,
								page: prev.page - 1,
							}))
						}
						disabled={filters.page === 1}
						className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200 hover:cursor-pointer disabled:hover:cursor-default"
					>
						Previous
					</button>
					<button
						onClick={() =>
							setFilters((prev) => ({
								...prev,
								page: prev.page + 1,
							}))
						}
						disabled={products.length < filters.limit}
						className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 disabled:bg-gray-200 hover:cursor-pointer disabled:hover:cursor-default"
					>
						Next
					</button>
				</footer>
			</main>
		</div>
	);
}
