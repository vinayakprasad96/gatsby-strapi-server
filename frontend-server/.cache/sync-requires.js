const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-article-js": hot(preferDefault(require("/home/vinayak/Downloads/pegasus/atlantis/blog-strapi-clone/frontend/src/templates/article.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/vinayak/Downloads/pegasus/atlantis/blog-strapi-clone/frontend/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/vinayak/Downloads/pegasus/atlantis/blog-strapi-clone/frontend/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/vinayak/Downloads/pegasus/atlantis/blog-strapi-clone/frontend/src/pages/index.js")))
}

