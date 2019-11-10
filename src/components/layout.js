import React from "React";
import { StyledLayout } from "../styles/StyledLayout";
import Menu from "./Menu";
import Footer from "./Footer";

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