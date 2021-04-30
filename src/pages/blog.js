import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Link from 'gatsby-link'

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Latest Post</h1>

      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.id}>
          <h3>{post.node.frontmatter.title}</h3>
          <small>
            Posted by: {post.node.frontmatter.author} on{' '}
            {post.node.frontmatter.date}
          </small>
          <br />
          <br />
          <Link to={post.node.frontmatter.path}>Read more...</Link>
          <br />
          <br />
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogIndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            path
            date
            author
          }
        }
      }
    }
  }
`

export default BlogPage
