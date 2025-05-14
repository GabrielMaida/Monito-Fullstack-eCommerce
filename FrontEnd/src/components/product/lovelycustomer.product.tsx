export default function LovelyCustomer() {
	return (
		<section className="p-6 flex flex-col gap-4">
			<p className="font-bold text-[24px]">Our lovely customer</p>
			<div className="flex overflow-x-auto gap-3 h-[400px] *:aspect-[13/20] *:object-cover *:rounded-xl">
				<img src="/imgs/lovely1.png" />
				<img src="/imgs/lovely2.png" />
				<img src="/imgs/lovely3.png" />
				<img src="/imgs/lovely4.png" />
				<img src="/imgs/lovely5.png" />
				<img src="/imgs/lovely1.png" />
			</div>
		</section>
	);
}
