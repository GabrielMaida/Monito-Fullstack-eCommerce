import LightButton from "../utils/lightbutton.utils";
import ShebaIcon from "../../assets/svgs/sheba.svg?react";
import WhiskasIcon from "../../assets/svgs/whiskas.svg?react";
import BakersIcon from "../../assets/svgs/bakers.svg?react";
import FelixIcon from "../../assets/svgs/felix.svg?react";
import GoodboyIcon from "../../assets/svgs/goodboy.svg?react";
import ButchersIcon from "../../assets/svgs/butchers.svg?react";
import PedigreeIcon from "../../assets/svgs/pedigree.svg?react";

export default function PetSellers() {
	return (
		<aside className="flex flex-col mt-8 mb-5">
			<div className="flex flex-row items-center gap-3">
				<p className="font-medium">Proud to be part of</p>
				<p className="font-bold text-[#003459] text-[24px] flex-1">Pet Sellers</p>
				<LightButton text="View all our sellers" icon="arrow" />
			</div>
			<div className="flex flex-row gap-8 justify-evenly items-center my-6">
				<ShebaIcon />
				<WhiskasIcon />
				<BakersIcon />
				<FelixIcon />
				<GoodboyIcon />
				<ButchersIcon />
				<PedigreeIcon />
			</div>
		</aside>
	);
}
