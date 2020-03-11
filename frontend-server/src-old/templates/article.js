import React from "react"  
import { graphql } from "gatsby"

import ReactMarkdown from "react-markdown"  
import Moment from "react-moment"

import Layout from "../components/layout"

export const query = graphql`  
  query ArticleQuery($id: Int!) {
    strapiArticle(strapiId: { eq: $id }) {
      strapiId
      title
      content
      published_at
      image {
        publicURL
      }
    }
  }
`

const Article = ({ data }) => {  
  const article = data.strapiArticle
  return (
    <Layout>
      <div>
        <div
          id="banner"
          className=""
          data-src={article.image.publicURL}
          data-srcset={article.image.publicURL}
          data-uk-img
        >
          <h1>{article.title}</h1>
        </div>

        <div className="">
          <div className="">
            <ReactMarkdown source={article.content} />
            <p>
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Article  