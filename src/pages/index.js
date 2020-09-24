import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul style={{ listStyle: "none" }}>
      {data.allWordpressAcfOurTeam.edges.map(post => (
        <li style={{ padding: "20px 0", borderBottom: "1px solid #ccc" }}>
          <Link
            to={`/post/${post.node.acf.photo_gallery.source_url}`}
            style={{ display: "flex", color: "black", textDecoration: "none" }}
            className={`post_${post.node.acf.photo_gallery.source_url}`}
          >
            <Img
              sizes={post.node.acf.photo_gallery.source_url}
              alt={post.node.title}
              style={{ width: "25%", marginRight: 20 }}
            />
            <div style={{ width: "75%" }}>
              <h3
                dangerouslySetInnerHTML={{ __html: post.node.acf.team_nickname }}
                style={{ marginBottom: 0 }}
              />
              <p style={{ margin: 0, color: "grey" }}>
                {post.node.acf.team_nickname} joined on {post.node.acf.joined_since}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.acf.team_position }} />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allWordpressAcfOurTeam {
      edges {
        node {
          acf {
            joined_since
            photo_gallery {
              source_url
            }
            team_nickname
            team_position
            teamnumber
          }
        }
      }
    }
  }
`