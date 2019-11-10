import React from "react";
import { StyledMenuItem } from "../styles/StyledMenuItem";

const MenuItem = ({ menuItem }) => {
    
    const { title, url, dropdown } = menuItem;

    return (
        <StyledMenuItem>
            <a href={url}>{title}</a>
            {dropdown && (
                <ul className="dropdown-menu">
                    {dropdown.map((dropDownEl, i) => <li key={i}><a href={dropDownEl.url}>{dropDownEl.title}</a></li>)}  
                </ul>
            )}
        </StyledMenuItem>
    )
}

export default MenuItem;