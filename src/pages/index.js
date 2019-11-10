import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout.js";
import Work from "../components/Work.js";

const IndexPage = () => {
const data = useStaticQuery(graphql`
query indexPage {
    allDatoCmsSketchbook {
      edges {
        node {
          title,
          description,
          image {
            url,
          },
          url
        }
      }
    }
  }
`)

const datafromDato = data && data.allDatoCmsSketchbook.edges.map(el => el.node);
const data1 = datafromDato && datafromDato.slice(0,3);
const data2 = datafromDato && datafromDato.slice(3,6);
const data3 = datafromDato && datafromDato.slice(6);

return (
    <Layout>
        <div className="work-wrapper">
            <div className="column">
                {data1.map((work, i) => {
                return <Work work={work} key={i} />
                })}
            </div>
            <div className="column">
                {data2.map((work, i) => {
                return <Work work={work} key={i} />
                })}
            </div>
            <div className="column">
                {data3.map((work, i) => {
                return <Work work={work} key={i} />
                })}
            </div>
        </div>
    </Layout>
    )
}

export default IndexPage;
