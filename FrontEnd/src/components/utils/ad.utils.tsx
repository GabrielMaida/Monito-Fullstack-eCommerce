import LightButton from "./lightbutton.utils";
import DarkButton from "./darkbutton.utils";
import PlayButton from "../../assets/svgs/play2.svg?react";
import "../../styles/lightbutton.css";

export default function Ad({ which }: { which: number }) {
	const model1 = (
		<aside className="bg-cover bg-no-repeat bg-center h-[400px] rounded-[20px] flex items-center bg-[url(/imgs/ad1.png)] text-[#003459]">
			<div className="w-full flex flex-row">
				<div className="w-1/2"></div>
				<div className="w-1/2 flex flex-col items-end p-6 mr-20">
					<h2 className="font-extrabold text-[52px] mb-1">One More Friend</h2>
					<h3 className="font-bold text-[36px] mb-3">Thousands More Fun!</h3>
					<p className="text-[#242B33] font-medium text-right text-sm mb-6 max-w-md">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
					<div className="flex flex-row gap-4">
						<LightButton text="View Intro" icon="play" />
						<DarkButton text="Explore Now" />
					</div>
				</div>
			</div>
		</aside>
	);

	const model2 = (
		<aside className="bg-cover bg-no-repeat bg-center h-[400px] rounded-[20px] flex items-center bg-[url(/imgs/ad3.png)] text-white">
			<div className="w-full flex flex-row">
				<div className="w-1/2"></div>
				<div className="w-1/2 flex flex-col items-end p-6 mr-20">
					<h2 className="font-extrabold text-[52px] mb-1">One More Friend</h2>
					<h3 className="font-bold text-[36px] mb-3">Thousands More Fun!</h3>
					<p className="text-[#CCD1D2] font-medium text-right text-sm mb-6 max-w-md">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
					<div className="flex flex-row gap-4">
						<div className="IconComponent flex flex-row gap-4 items-center py-2 px-6 rounded-full bg-transparent text-base text-white font-semibold border-2 border-white hover:bg-[#003459] hover:border-[#003459] transition hover:cursor-pointer stroke-white">
							<p>View Intro</p>
							<PlayButton />
						</div>
						<div className="py-2 px-8 rounded-full bg-white text-[#003459] text-base font-bold border-2 border-transparent hover:bg-[#003459] hover:border-[#003459] hover:text-white transition hover:cursor-pointer">
							<p>Explore Now</p>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);

	const whichModel = which === 2 ? model2 : model1;

	return whichModel;
}
