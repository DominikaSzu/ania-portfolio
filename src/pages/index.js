import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout.js";
import Work from "../components/Work.js";

const IndexPage = () => {
const data = useStaticQuery(graphql`
query indexPage {
    arts: allDatoCmsArt {
      edges {
        node {
          title,
          description,
          url,
          image {
            url,
          },
        }
      }
    },
    sketchbooks: allDatoCmsSketchbook {
      edges {
        node {
          title,
          description,
          url,
          image {
            url,
          },
        }
      }
    },
    illustrations: allDatoCmsIllustration {
      edges {
        node {
          title,
          description,
          url,
          image {
            url,
          },
        }
      }
    },
    projects: allDatoCmsProject {
      edges {
        node {
          title,
          description,
          url,
          image {
            url,
          },
        }
      }
    }
  }
`)

const datafromDato1 = data && data.arts.edges.map(el => el.node);
const datafromDato2 = data && data.sketchbooks.edges.map(el => el.node);
const datafromDato3 = data && data.illustrations.edges.map(el => el.node);
const data1 = datafromDato1 && datafromDato1.slice(0,7);
const data2 = datafromDato2 && datafromDato2.slice(0,7);
const data3 = datafromDato3 && datafromDato3.slice(0,7);

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
