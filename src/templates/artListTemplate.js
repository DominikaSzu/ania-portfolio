import React from 'react';
import Layout from "../components/Layout.js";
import Work from "../components/Work.js";

const artListTemplate = ({ pageContext }) => {

    const data1 = pageContext && Object.values(pageContext).slice(0,3);
    const data2 = pageContext && Object.values(pageContext).slice(3,6);
    const data3 = pageContext && Object.values(pageContext).slice(6,9);

    return (
        <Layout>
            <div className="work-wrapper">
                <div className="column">
                    {data1.map((work, i) => {
                    return <Work work={work.node} key={i} />
                    })}
                </div>
                <div className="column">
                    {data2.map((work, i) => {
                    return <Work work={work.node} key={i} />
                    })}
                </div>
                <div className="column">
                    {data3.map((work, i) => {
                    return <Work work={work.node} key={i} />
                    })}
                </div>
            </div>
        </Layout>
    )
}

export default artListTemplate;