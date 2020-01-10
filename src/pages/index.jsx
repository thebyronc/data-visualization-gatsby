import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
// import Image from "../components/Image"
import SEO from "../components/seo"

import Spline from "../components/charts/spline"
import BasicBar from "../components/charts/basicbar"
import LineColumn from "../components/charts/LineColumn"

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
    <BasicBar></BasicBar>
    <LineColumn></LineColumn>
    
  </Layout>
)

export default IndexPage
