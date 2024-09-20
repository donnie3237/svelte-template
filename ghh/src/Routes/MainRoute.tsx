import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import { lazy, Suspense } from "react";
const Hello = lazy(() => import("../Pages/Hello/Hello"));
const One = lazy(() => import("../Pages/one/One"));
const Two = lazy(() => import("../Pages/two/Two"));

function MainRoute() {
	return (
		<Router>
			<Header />
			<Suspense fallback={<h1>Loading....</h1>}>
				<Routes>
					<Route path="/" element={<Hello />} />
					<Route path="/one" element={<One />} />
					<Route path="/two" element={<Two />} />
				</Routes>
			</Suspense>
		</Router>
	);
}

export default MainRoute;
