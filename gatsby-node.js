const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const artListTemplate = path.resolve(`src/templates/artListTemplate.js`)
    const artWorkTemplate = path.resolve(`src/templates/artWorkTemplate.js`)
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

    // Create pages with list of art works

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
        path: `/illustrations/`,
        component: artListTemplate,
        context: illustrations,
    })

    const projects = work.data.projects.edges
    createPage({
        path: `/projects/`,
        component: artListTemplate,
        context: projects,
    })

    // Create single art work page

    arts.forEach(art => {
      createPage({
        path: art.node.url,
        component: artWorkTemplate,
        context: art.node,
      })
    })

    sketchbooks.forEach(sketchbook => {
      createPage({
        path: sketchbook.node.url,
        component: artWorkTemplate,
        context: sketchbook.node,
      })
    })

    illustrations.forEach(illustration => {
        createPage({
          path: illustration.node.url,
          component: artWorkTemplate,
          context: illustration.node,
      })
    })

    projects.forEach(project => {
      createPage({
        path: project.node.url,
        component: artWorkTemplate,
        context: project.node,
      })
    })
}