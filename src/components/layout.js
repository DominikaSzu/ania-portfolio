import React from "React";
import { StyledLayout } from "../styles/StyledLayout";
import Menu from "./Menu";
import Footer from "./Footer";

const Layout = ({ children }) => {
return (
	<StyledLayout>
		<Menu />
		<div className="content-wrapper">
			<main>{children}</main>
		</div>
		<Footer />
	</StyledLayout>
)}

export default Layout;