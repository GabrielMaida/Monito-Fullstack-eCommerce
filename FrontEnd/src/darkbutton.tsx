type DarkButtonProps = {
	text: string;
};

const DarkButton = ({ text }: DarkButtonProps) => {
	return (
		<div className="inline-block py-3 px-5 rounded-full bg-blue-950 text-white border border-transparent hover:bg-white hover:text-black hover:border-black">
			<p className="">{text}</p>
		</div>
	);
};

export default DarkButton;
