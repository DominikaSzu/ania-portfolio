import React from 'react';
import Layout from "../components/Layout";
import Work from "../components/Work";

const artListTemplate = ({ pageContext }) => {

    const data1 = pageContext && Object.entries(pageContext).slice(0,3);
    const data2 = pageContext && Object.entries(pageContext).slice(3,6);
    const data3 = pageContext && Object.entries(pageContext).slice(6,9);

    return (
        <Layout>
            <div className="work-wrapper">
                <div className="column">
                    {data1.map((work, i) => {
                    return <Work work={work[1].node.image[0].url} key={i} />
                    })}
                </div>
                <div className="column">
                    {data2.map((work, i) => {
                    return <Work work={work[1].node.image[0].url} key={i} />
                    })}
                </div>
                <div className="column">
                    {data3.map((work, i) => {
                    return <Work work={work[1].node.image[0].url} key={i} />
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default artListTemplate;