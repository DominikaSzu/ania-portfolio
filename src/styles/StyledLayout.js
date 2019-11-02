import styled from "styled-components"; 
import "./helpers/reset.scss";

export const StyledLayout = styled.div`
width: 100%;
max-width: 1400px;
margin: 0 auto;
padding: 0 40px;
position: relative;
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
`;


