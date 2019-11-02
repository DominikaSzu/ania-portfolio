import styled from "styled-components";

export const StyledWork = styled.div`
width: calc(100% - 20px);
margin: 10px;
opacity: 0.9;
transition: box-shadow 0.3s, transform 0.3s, opacity 0.3s;

a {
    text-decoration: none;
}

img {
    border-radius: 4px;
    width: 100%;
    height: auto;
    display: block;   
}

&:hover {
    -webkit-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    transform: scale(1.01);
    opacity: 1;
}

@media (max-width: 1200px) {
    // width: calc(50% - 20px);
}

@media (max-width: 768px) {
    // width: calc(100% - 20px);
}
`;