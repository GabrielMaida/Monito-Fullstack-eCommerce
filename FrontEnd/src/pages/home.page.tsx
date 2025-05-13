import Header from "../components/home/header.home";
import Main from "../components/home/main.home";
import Footer from "../components/utils/footer.utils";

export default function HomePage() {
	return (
		<div className="flex flex-col gap-8">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
