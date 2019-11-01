import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Work from "../components/Work";

const IndexPage = () => (
<Layout>
    <div className="work-wrapper">
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>
        <Work/>        
    </div>
</Layout>
)

export default IndexPage;
