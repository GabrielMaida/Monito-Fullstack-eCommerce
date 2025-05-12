import NavBar from "../utils/navbar";
import Hero from "./hero";

export default function Header() {
	return (
		<header className="min-h-[100vh] bg-[url(./imgs/hero.png)] bg-cover flex flex-col font-medium text-lg text-[#003459] overflow-x-hidden">
			<NavBar />
			<Hero />
		</header>
	);
}
