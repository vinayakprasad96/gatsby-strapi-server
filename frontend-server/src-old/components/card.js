import React from "react"  
import { Link } from "gatsby"

const Card = ({ article }) => {  
  return (
    <Link to={`/article/${article.node.strapiId}`}>
      <div>
        <div>
          <img
            src={article.node.image.publicURL}
            alt={article.node.image.publicURL}
            height="100"
          />
        </div>
        <div>
          <p>
            {article.node.title}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card  