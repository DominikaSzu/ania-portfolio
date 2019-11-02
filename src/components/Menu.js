import React from "react";
import { StyledMenu } from "../styles/StyledMenu";
import MenuItem from "./MenuItem";

const Menu = () => {
return (
	<StyledMenu>
		<img src="https://www.datocms-assets.com/16500/1572641945-logo.png" />
		<div className="menu-item-wrapper">
			<MenuItem />
			<MenuItem />
			<MenuItem />
		</div>
	</StyledMenu>
)}

export default Menu;