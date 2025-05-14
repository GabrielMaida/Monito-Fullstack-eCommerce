import Filters from "./filters.products";
import Ad from "../utils/ad.utils";

export default function Main() {
	return (
		<main className="w-4/5 m-auto bg-white">
			<div className="w-1/2 flex flex-col gap-5">
				<div className="flex items-center text-sm text-[#667479]">
					<a href="/">
						<span className="hover:text-[#003459] hover:cursor-pointer">Home</span>
					</a>
					<span className="mx-2">&gt;</span>
					<span className="hover:text-[#00171F] hover:cursor-pointer hover:underline">Dogs</span>
				</div>
			</div>
			<div className="mt-3 mb-12">
				<Ad which={2} />
			</div>
			<Filters />
		</main>
	);
}
