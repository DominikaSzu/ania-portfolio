import React from "react";
import { StyledLayout } from "../styles/StyledLayout.js";
import Menu from "./Menu.js";
import Footer from "./Footer.js";

const Layout = ({ children }) => {
	console.log('fun begun');
return (
	<StyledLayout>
		<Menu />
		<div className="content-wrapper">
			{children}
		</div>
		<Footer />
	</StyledLayout>
)};

export default Layout;