import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import ProductsPage from "./pages/products.page";
import "./styles/main.css";
import "./styles/fonts.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/products" element={<ProductsPage />} />
			</Routes>
		</Router>
	</StrictMode>
);
