import DarkButton from "./darkbutton";
import LightButton from "./lightbutton";

function Hero() {
	return (
		<div className="flex-grow w-4/5 m-auto">
			<div className="flex flex-col sm:w-3/4 md:7/10 lg:w-3/5 xl:w-2/5 py-10">
				<h1 className="font-extrabold text-[60px]">One more friend</h1>
				<h2 className="font-bold text-[46px]">Thousands more fun!</h2>
				<p className="py-10">
					Having a pet means you have more joy, a new friend, a happy
					person who will always be with you to have fun. We have 200+
					different pets that can meet your needs!
				</p>
				<div className="flex flex-row gap-5">
					<LightButton text="View Intro" icon="play" />
					<DarkButton text="Explore Now" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
