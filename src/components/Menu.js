import React from "react";
import { StyledMenu } from "../styles/StyledMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
return (
	<StyledMenu>
		<img src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80" />
		<div className="menu-item-wrapper">
			<MenuItem />
			<MenuItem />
			<MenuItem />
		</div>
	</StyledMenu>
)}

export default Menu;