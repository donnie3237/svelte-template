import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

function SecureRoute() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<h1>Security</h1>}></Route>
			</Routes>
		</Router>
	);
}

export default SecureRoute;
