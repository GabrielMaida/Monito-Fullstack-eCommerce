import { useParams } from "react-router-dom";
import NavBar from "../components/utils/navbar.utils";
import Main from "../components/product/main.product";
import Footer from "../components/utils/footer.utils";

export default function ProductPage() {
	const { sku } = useParams();

	return (
		<div className="flex flex-col gap-5">
			<NavBar />
			<Main sku={sku} />
			<Footer />
		</div>
	);
}
