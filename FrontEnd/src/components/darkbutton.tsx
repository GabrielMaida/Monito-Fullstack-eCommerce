type ButtonProps = {
	text: string;
	weight?: "normal" | "bold";
};

const DarkButton = ({ text, weight = "normal" }: ButtonProps) => {
	let fontWeight =
		"inline-block py-2 px-8 rounded-full bg-blue-950 text-white text-base border border-transparent hover:bg-transparent hover:text-blue-950 hover:border-blue-950 transition hover:cursor-pointer hover:font-medium";

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
