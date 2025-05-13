import Details from "./details.product";

export default function Main({ sku }: { sku?: string }) {
	return (
		<main className="w-4/5 m-auto">
			<Details sku={sku} />
		</main>
	);
}
