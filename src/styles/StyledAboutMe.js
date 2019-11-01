import styled from "styled-components";

export const StyledAboutMe = styled.div`
display: flex;
align-items: center;
max-width: 1200px;
margin: auto;
margin-bottom: 50px;

.image-about-me {
    height: 300px;
    width: 300px;
    background-image: url('https://www.datocms-assets.com/16500/1572634183-anna.jpg');
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    background-repeat: no-repeat;
    margin: 50px 50px 50px 0;
    display: block;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
        margin: 50px;
     }

}

@media (max-width: 768px) {
   flex-direction: column;
}
`;