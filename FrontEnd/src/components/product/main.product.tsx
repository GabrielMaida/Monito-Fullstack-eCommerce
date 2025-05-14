import Details from "./details.product";
import LovelyCustomer from "./lovelycustomer.product";
import WhatsNew from "../utils/whatsnew.utils";

export default function Main({ sku }: { sku?: string }) {
	return (
		<main className="w-4/5 m-auto flex flex-col gap-10 mb-15">
			<Details sku={sku} />
			<LovelyCustomer />
			<WhatsNew howManyProducts={4} />
		</main>
	);
}
