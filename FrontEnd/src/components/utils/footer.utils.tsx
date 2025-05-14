import Facebook from "../../assets/svgs/facebook.svg?react";
import Twitter from "../../assets/svgs/twitter.svg?react";
import Instagram from "../../assets/svgs/instagram.svg?react";
import Youtube from "../../assets/svgs/youtube.svg?react";
import Logo from "../../assets/svgs/logo.svg?react";
import "../../styles/footer-icons.css";

export default function Footer() {
	return (
		<footer className="bg-[#fbeed4] rounded-t-lg font-medium" id="footer">
			<div className="flex flex-col w-4/5 m-auto">
				<section className="flex flex-row items-center gap-5 mt-15 bg-[#003459] text-white py-7 px-6 rounded-xl font-medium text-lg">
					<p className="text-2xl">
						Register Now So You Don't Miss
						<br />
						Our Programs
					</p>
					<div className="flex flex-row flex-1 justify-end bg-white p-3 rounded-xl gap-3">
						<input type="text" placeholder="Enter your Email" className="border py-2 px-4 border border-black text-black rounded-xl outline-none flex-1" />
						<button className="text-black py-2 px-4 text-base bg-[#003459] text-white font-normal border border-transparent rounded-xl hover:bg-blue-900 transition hover:cursor-pointer">Subscribe Now</button>
					</div>
				</section>
				<section className="flex flex-row justify-between py-10 border-b border-[#CCD1D2]">
					<ul className="flex flex-row gap-15 tracking-wide">
						<li className="hover:font-bold hover:cursor-pointer">Home</li>
						<li className="hover:font-bold hover:cursor-pointer">Category</li>
						<li className="hover:font-bold hover:cursor-pointer">About</li>
						<li className="hover:font-bold hover:cursor-pointer">Contact</li>
					</ul>
					<ul className="flex flex-row gap-15 tracking-wide">
						<li>
							<Facebook className="facebook hover:cursor-pointer hover:fill-blue-400" />
						</li>
						<li>
							<Twitter className="twitter hover:cursor-pointer" />
						</li>
						<li>
							<Instagram className="instagram hover:cursor-pointer" />
						</li>
						<li>
							<Youtube className="youtube hover:cursor-pointer" />
						</li>
					</ul>
				</section>
				<section className="flex flex-row justify-between py-10 items-center text-[#667479]">
					<p>&copy; 2022 Monito. All rights reserved.</p>
					<Logo />
					<div className="flex flex-row gap-10">
						<p className="hover:cursor-pointer hover:text-gray-600">Terms of Service</p>
						<p className="hover:cursor-pointer hover:text-gray-600">Privacy Policy</p>
					</div>
				</section>
			</div>
		</footer>
	);
}
