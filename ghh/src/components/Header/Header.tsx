import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
	return (
		<div className="flex flex-col w-[150px] h-screen bg-slate-600 fixed">
			<NavLink className="active.bg-blue-600 logo" to="/">
				Home
			</NavLink>
			<NavLink to="/one">one</NavLink>
			<NavLink to="/two">two</NavLink>
		</div>
	);
}

export default Header;
