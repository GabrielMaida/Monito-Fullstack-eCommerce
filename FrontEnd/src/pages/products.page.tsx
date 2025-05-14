import NavBar from "../components/utils/navbar.utils";
import Main from "../components/products/main.products";
import Footer from "../components/utils/footer.utils";

export default function ProductsPage() {
	return (
		<div className="flex flex-col gap-5">
			<NavBar />
			<Main />
			<Footer />
		</div>
	);
}
