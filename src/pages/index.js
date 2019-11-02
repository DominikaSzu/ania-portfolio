import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Work from "../components/Work";

const works = [
    'https://www.datocms-assets.com/16500/1572630212-annaszukala02.jpg',
    'https://www.datocms-assets.com/16500/1572630209-annaszukala03.jpg',
    'https://www.datocms-assets.com/16500/1572630206-scena.jpg',
    'https://www.datocms-assets.com/16500/1572630216-annaszukala01.jpg',
    'https://www.datocms-assets.com/16500/1572630212-annaszukala02.jpg',
    'https://www.datocms-assets.com/16500/1572630206-scena.jpg',
    'https://www.datocms-assets.com/16500/1572630209-annaszukala03.jpg',
    'https://www.datocms-assets.com/16500/1572630216-annaszukala01.jpg',
]

const IndexPage = () => (
<Layout>
    <div className="work-wrapper">
        {works.map((work, i) => <Work work={work} key={i} />)}
    </div>
</Layout>
)

export default IndexPage;
