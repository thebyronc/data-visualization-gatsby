import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/Image"
import SEO from "../components/seo"

import Spline from "../components/charts/spline"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Spline></Spline>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
