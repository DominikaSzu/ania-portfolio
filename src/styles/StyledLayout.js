import styled from "styled-components"; 
import "./helpers/reset.scss";

export const StyledLayout = styled.div`
width: 100%;
max-width: 1400px;
margin: 0 auto;
padding: 0 40px;
position: relative;

.content-wrapper {
	h1 {
		text-align: center;
		line-height: 32px;
	}

	p {
		text-align: justify;
	}
}

.work-wrapper {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	margin: 30px -10px;
}
.column {
	-ms-flex: 33%;
	flex: 33%;
	max-width: 33%;

	@media (max-width: 1200px) {
		-ms-flex: 50%;
		flex: 50%;
		max-width: 50%;
	}
	
	@media (max-width: 768px) {
		-ms-flex: 100%;
		flex: 100%;
		max-width: 100%;
	}
}

.art-work-container {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	max-width: 100%;
	position: relative;
	box-sizing: border-box;
}

.art-work {
	max-width: calc(100% - 20px);
	width: auto;
	margin: 10px;
	opacity: 0.9;
	height: auto;
	transition: box-shadow 0.3s, transform 0.3s, opacity 0.3s;
	
	&:hover {
		-webkit-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
		-moz-box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
		box-shadow: 0px 6px 17px -4px rgba(0,0,0,0.75);
		transform: scale(1.01);
		opacity: 1;
	}
}

.art-work img {
	border-radius: 4px;
    max-width: 100%;
    max-height: 90vh;
    display: block;
	cursor: pointer;
}
`;


