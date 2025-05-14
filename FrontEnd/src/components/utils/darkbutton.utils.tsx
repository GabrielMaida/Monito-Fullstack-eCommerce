type ButtonProps = {
	text: string;
	weight?: "normal" | "bold";
};

const DarkButton = ({ text, weight = "normal" }: ButtonProps) => {
	let fontWeight = "py-2 px-8 rounded-full bg-[#003459] text-white text-base border-2 border-transparent hover:bg-transparent hover:text-[#003459] hover:border-[#003459] transition hover:cursor-pointer hover:font-medium";

	if (weight === "bold") {
		fontWeight += " font-semibold hover:font-semibold";
	}

	return (
		<div className={fontWeight}>
			<p>{text}</p>
		</div>
	);
};

export default DarkButton;
