import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { PhotosPage } from "./pages/PhotosPage";
import { VideosPage } from "./pages/VideosPage";
import { WebsitesPage } from "./pages/WebsitesPages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./scss/app.scss";

function App() {

	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/photos" element={<PhotosPage />} />
				<Route path="/videos" element={<VideosPage />} />
				<Route path="/websites" element={<WebsitesPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
