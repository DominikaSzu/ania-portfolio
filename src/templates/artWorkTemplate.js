import React from 'react';
import Layout from "../components/Layout";

const artWorkTemplate = (props) => {

    const { title, description, url, image } = props.pageContext;

    return (
        <Layout>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="art-work-container">
                {image.map((work, i) => {
                    return  <div className="art-work" key={i}>
                                <img src={work.url} />
                            </div>
                })}
            </div>
        </Layout>
    )
}

export default artWorkTemplate;