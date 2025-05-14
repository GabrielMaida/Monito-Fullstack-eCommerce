import LightButton from "../utils/lightbutton.utils";

export default function PetKnowledge() {
	return (
		<section className="flex flex-col gap-5 mt-8 mb-7">
			<div>
				<p className="text-base font-medium">You already know ?</p>
				<header className="mb-5 flex flex-row text-[#003459] text-[16px] items-center justify-between">
					<h2 className="font-bold text-[24px]">Useful pet knowledge</h2>
					<a href="/products">
						<LightButton text="View More" icon="arrow" />
					</a>
				</header>
			</div>
			<div className="grid grid-cols-3 gap-6 font-bold">
				<div className="flex flex-col items-start justify-start gap-2 p-2 shadow-md rounded-lg hover:shadow-xl hover:cursor-pointer">
					<img src="./imgs/running.png" alt="Puppy Running" className="w-full self-center" />
					<p className="text-[10px] text-white bg-[#00A7E7] rounded-full mx-2 px-3 py-1 hover:bg-white hover:text-[#00A7E7]">Pet Knowledge</p>
					<h3 className="text-[16px] text-black mx-2">What is a Pomeranian? How to Identify Pomeranian Dogs</h3>
					<p className="font-normal text-[#242B33] mx-2 text-start">The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu...</p>
				</div>
				<div className="flex flex-col items-start justify-start gap-2 p-2 shadow-md rounded-lg hover:shadow-xl hover:cursor-pointer">
					<img src="./imgs/eating.png" alt="Puppy Eating" className="w-full self-center" />
					<p className="text-[10px] text-white bg-[#00A7E7] rounded-full mx-2 px-3 py-1 hover:bg-white hover:text-[#00A7E7]">Pet Knowledge</p>
					<h3 className="text-[16px] text-black mx-2">Dog Diet You Need To Know</h3>
					<p className="font-normal text-[#242B33] mx-2 text-start">Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially...</p>
				</div>
				<div className="flex flex-col items-start justify-start gap-2 p-2 shadow-md rounded-lg hover:shadow-xl hover:cursor-pointer">
					<img src="./imgs/destroying.png" alt="Puppy Destroying" className="w-full self-center" />
					<p className="text-[10px] text-white bg-[#00A7E7] rounded-full mx-2 px-3 py-1 hover:bg-white hover:text-[#00A7E7]">Pet Knowledge</p>
					<h3 className="text-[16px] text-black mx-2">Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively</h3>
					<p className="font-normal text-[#242B33] mx-2 text-start">Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.</p>
				</div>
			</div>
		</section>
	);
}
