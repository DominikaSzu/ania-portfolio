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

&:hover {
    -webkit-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
    transform: scale(1.01);
}
`;