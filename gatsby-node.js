const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const artListTemplate = path.resolve(`src/templates/artListTemplate.js`)
    const work = await graphql(`
    {
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

    const arts = work.data.arts.edges
    createPage({
        path: `/art/`,
        component: artListTemplate,
        context: arts,
    }) 

    const sketchbooks = work.data.sketchbooks.edges
    createPage({
        path: `/sketchbook/`,
        component: artListTemplate,
        context: sketchbooks,
    })

    const illustrations = work.data.illustrations.edges
    createPage({
        path: `/illustration/`,
        component: artListTemplate,
        context: illustrations,
    })

    const projects = work.data.projects.edges
    createPage({
        path: `/project/`,
        component: artListTemplate,
        context: projects,
    })
}