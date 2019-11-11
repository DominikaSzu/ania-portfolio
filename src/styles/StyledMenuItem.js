import styled from "styled-components";

export const StyledMenuItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 10px 20px;
text-transform: uppercase;
cursor: pointer;
border-radius: 4px;
position: relative;
text-align: center;

&:hover {
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
    padding: 10px 20px;
    margin-top: 30px;
    display: none;
    text-align: left;
    background-color: #fff;
    z-index: 5;

    li {
        margin: 10px auto;
    }
}
`;