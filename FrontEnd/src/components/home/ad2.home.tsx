import LightButton from "../utils/lightbutton.utils";
import DarkButton from "../utils/darkbutton.utils";

export default function Ad2() {
	return (
		<aside className="bg-[url(/imgs/ad2.png)] bg-cover bg-no-repeat bg-center h-[420px] rounded-[20px] flex items-center">
			<div className="w-full flex flex-row-reverse">
				<div className="w-1/2"></div>
				<div className="w-1/2 flex flex-col p-6 ml-20">
					<h2 className="text-[#003459] font-extrabold text-[52px] mb-1 flex gap-5">
						<p>Adoption</p>
						<img src="./svgs/paw.svg" />
					</h2>
					<h3 className="text-[#003459] font-bold text-[36px] mb-3">We need help. So do they.</h3>
					<p className="text-[#242B33] font-medium text-sm mb-13">
						Adopt a pet and give it a home,
						<br />
						it will be love you back unconditionally.
					</p>
					<div className="flex flex-row gap-4">
						<DarkButton text="Explore Now" />
						<LightButton text="View Intro" icon="play" />
					</div>
				</div>
			</div>
		</aside>
	);
}
