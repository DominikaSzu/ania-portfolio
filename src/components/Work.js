import React from "react";
import { StyledWork } from "../styles/StyledWork";

const Work = (props) => {
    return (
        <StyledWork>
            <a href={props.work.url || "#"}>
                <img src={props.work.image[0].url} />
            </a>
        </StyledWork>
    )
}

export default Work;