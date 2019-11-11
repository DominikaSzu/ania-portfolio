import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StyledMenu } from "../styles/StyledMenu.js";
import MenuItem from "./MenuItem.js";

const Menu = () => {

	const data = useStaticQuery(graphql`
		query menuItems {
			menuItems: allDatoCmsMenuItem {
			  edges {
				node {
				  title,
				  url,
				  dropdown {
					title,
					url,
				  }
				}
			  }
			}
		  }
		`);

		const menuItems = data && data.menuItems.edges;

return (
	<StyledMenu>
		<a href="/">
			<img src="https://www.datocms-assets.com/16500/1572641945-logo.png" />
		</a>
		<div className="menu-item-wrapper">
			{menuItems.map((menuItem, i) => <MenuItem menuItem={menuItem.node} key={i} />)}
		</div>
	</StyledMenu>
)}

export default Menu;