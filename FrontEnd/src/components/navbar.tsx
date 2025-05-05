import Logo from "../assets/Logo.svg?react";
import SearchIcon from "../assets/search-icon.svg?react";
import DarkButton from "./darkbutton";

function NavBar() {
	return (
		<nav className="items-center flex flex-row flex-wrap justify-between w-4/5 m-auto max-h-44 py-3 my-4">
			<Logo />
			<ul className="flex flex-row gap-5 font-bold ml-4">
				<li className="rounded-full hover:text-white hover:bg-blue-950 py-1 px-5 hover:cursor-pointer">
					Home
				</li>
				<li className="rounded-full hover:text-white hover:bg-blue-950 py-1 px-5 hover:cursor-pointer">
					Category
				</li>
				<li className="rounded-full hover:text-white hover:bg-blue-950 py-1 px-5 hover:cursor-pointer">
					About
				</li>
				<li className="rounded-full hover:text-white hover:bg-blue-950 py-1 px-5 hover:cursor-pointer">
					Contact
				</li>
			</ul>
			<div className="flex flex-row bg-white rounded-full items-center px-6 py-2 gap-2">
				<SearchIcon className="hover:cursor-pointer" />
				<input
					className="outline-none pr-5 text-base"
					type="text"
					name="nav-search"
					placeholder="Search something here!"
				/>
			</div>
			<DarkButton text="Join the community" weight="bold" />
			<div className="flex flex-row items-center justify-center gap-2 rounded-full hover:bg-white py-1 px-4 hover:cursor-pointer">
				<img src="./svgs/vnd.svg" alt="Vietnamese money icon" />
				<p>VND</p>
				<img
					src="./svgs/opendown.svg"
					alt="Open dropdown button icon"
				/>
			</div>
		</nav>
	);
}

export default NavBar;
