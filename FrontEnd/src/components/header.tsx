import NavBar from "./navbar";
import Hero from "./hero";

function Header() {
	return (
		<header className="h-[100vh] bg-[url(./imgs/hero.png)] bg-cover flex flex-col font-medium text-lg text-blue-950 overflow-x-hidden">
			<NavBar />
			<Hero />
		</header>
	);
}

export default Header;
