import React from "react";
import { StyledWork } from "../styles/StyledWork";

const Work = (props) => {
    return (
        <StyledWork>
            <a href="#">
                <img src={props.work} />
            </a>
        </StyledWork>
    )
}

export default Work;