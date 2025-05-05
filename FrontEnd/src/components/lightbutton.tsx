import PlayButton from "../assets/play.svg?react";
import RightArrow from "../assets/rightarrow.svg?react";
import "../styles/lightbutton.css";

type ButtonProps = {
	text: string;
	icon: "arrow" | "play";
};

const LightButton = ({ text, icon }: ButtonProps) => {
	const IconComponent = icon === "arrow" ? <RightArrow /> : <PlayButton />;

	return (
		<div className="IconComponent flex flex-row items-center gap-4 py-2 px-6 rounded-full bg-transparent text-base text-blue-950 font-semibold border border-blue-950 hover:bg-blue-950 hover:text-white hover:border-transparent transition hover:cursor-pointer stroke-white">
			<p>{text}</p>
			<div>{IconComponent}</div>
		</div>
	);
};

export default LightButton;
