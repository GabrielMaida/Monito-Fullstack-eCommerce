import Logo from "./assets/Logo.svg?react";
import SearchIcon from "./assets/search-icon.svg?react";
import DarkButton from "./darkbutton";

function Header() {
	return (
		<div className="bg-yellow-100">
			<header>
				<nav>
					<Logo />
					<ul>
						<li>Home</li>
						<li>Category</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
					<div className="nav-search">
						<SearchIcon />
						<input
							type="text"
							name="nav-search"
							placeholder="Search something here!"
						/>
					</div>
					<DarkButton text="Join the community" />
				</nav>
			</header>
			<div className="hero">
				<h2>Hero here!</h2>
			</div>
		</div>
	);
}

export default Header;
