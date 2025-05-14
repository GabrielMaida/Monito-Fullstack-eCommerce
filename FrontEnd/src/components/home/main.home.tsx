import WhatsNew from "../utils/whatsnew.utils";
import Ad from "../utils/ad.utils";
import OurProducts from "./ourproducts.home";
import PetSellers from "./petsellers.home";
import Ad2 from "./ad2.home";
import PetKnowledge from "./petknowledge.home";

export default function Main() {
	return (
		<main className="w-4/5 m-auto bg-white flex flex-col gap-7">
			<WhatsNew howManyProducts={8} />
			<Ad which={1} />
			<OurProducts />
			<PetSellers />
			<Ad2 />
			<PetKnowledge />
		</main>
	);
}
