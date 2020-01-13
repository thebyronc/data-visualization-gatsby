/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "../header"
import "./layout.css"

import AppBar from '../appbar/appbar'
import "typeface-nunito-sans"
import "typeface-open-sans"


const StyledWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`;

const StyledMain = styled.div`
  padding: 16px; 
  margin-left: 250px;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <StyledWrapper>
        <AppBar>

        </AppBar>
        <StyledMain>
          {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </StyledMain>
        
      </StyledWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
