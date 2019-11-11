import styled from "styled-components";

export const StyledMenu = styled.div`
// border: 2px solid pink;
height: 90vh;
min-height: 200px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
img {
    max-height: 300px;
    max-width: 100%;
    height: auto;
}

.menu-item-wrapper {
    display: flex;
    margin-top: 100px;
    min-height: 80px;
    padding: 30px;
    // border: 1px solid teal;

    @media (max-width: 500px) {
        flex-direction: column;
    }
}
`;