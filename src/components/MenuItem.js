import React from "react";
import { StyledMenuItem } from "../styles/StyledMenuItem";

const MenuItem = ({ menuItem }) => {
    
    const { title, url, dropdown } = menuItem;
    const dropdownDisplay = dropdown && (dropdown.length !== 0);

    return (
        <StyledMenuItem>
            {url? (
                <a href={url}>{title}</a>
            ) : (
                <span>{title}</span>
            ) }
            {dropdownDisplay && (
                <ul className="dropdown-menu">
                    {dropdown.map((dropDownEl, i) => <li key={i}><a href={dropDownEl.url}>{dropDownEl.title}</a></li>)}  
                </ul>
            )}
        </StyledMenuItem>
    )
}

export default MenuItem;