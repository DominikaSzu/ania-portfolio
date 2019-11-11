import React from "react";
import { Helmet } from "react-helmet";

const HelmetData = () => {
    return (
        <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Anna Szukała - Art & Illustration</title>
            <meta data-react-helmet="true" http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </Helmet>
    )
}

export default HelmetData;