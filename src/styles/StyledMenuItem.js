import styled from "styled-components";

export const StyledMenuItem = styled.div`
border: 1px solid yellow;
display: flex;
align-items: center;
justify-content: center;
padding: 10px 20px;
text-transform: uppercase;
cursor: pointer;
transition: box-shadow 0.3s, transform 0.3s;
border-radius: 4px;
position: relative;
text-align: center;

&:hover {
    -webkit-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    transform: scale(1.01);

    .dropdown-menu {
        display: block;
    }
}

a {
    text-decoration: none;

    &:link, &:visited, &:focus, &:hover, &:active {
        color: inherit;
    }
}

.dropdown-menu {
    list-style-type: none;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 20px;
    padding-top: 60px;
    display: none;
    text-align: left;

    li {
        margin: 10px auto;
    }
}
`;