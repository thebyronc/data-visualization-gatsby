import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

import SlantBackground from './slantbackground'

const StyledHeader = styled.div`
  background-size: 100% 100%;
  color: white;
  height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  header {
    width: 100%;
    max-width: 600px;
    text-align: center;
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      <SlantBackground></SlantBackground>

    </StyledHeader>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
