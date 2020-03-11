# Strapi Starter Gatsby Blog

Gatsby starter for creating a static blog with Strapi.

This starter allows you to try Strapi with Gatsby with the example of a simple static blog. It is fully customizable and due to the fact that it is open source, fully open to contributions. Do not hesitate to add new features etc ...

You may want to know how to develop such a starter by your own! This starter is actually the result of this [tutorial](https://strapi.io/blog/build-a-static-blog-with-gatsby-and-strapi)

![screenshot image](/screenshot.png)

### Pages

- "/" display every articles
- "/article/:id" display one article

### Prerequisites
Install gatsby CLI & strapi CLI, node 10+, npm 5+

### Getting started

**Clone the repository and install dependencies**

```bash
git clone https://github.com/vinayakprasad96/gatsby-strapi-server.git
cd gatsby-strapi-server
```

### Start the backend server

```bash
cd backend

# Using strapi
strapi dev
```

### Start the frontend server

```bash
cd frontend

# Using gatsby
gatsby develop

```

Gatsby server is running here => [http://localhost:8000](http://localhost:8000)
Strapi server is running here => [http://localhost:1337](http://localhost:1337)