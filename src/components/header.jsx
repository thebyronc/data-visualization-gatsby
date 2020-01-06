import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

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


const StyledBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: -80px;
  -webkit-transform: skewY(12deg);
  transform: skewY(12deg);
  -webkit-transform-origin: 100%;
  transform-origin: 100%;
  background: -o-linear-gradient(240deg, #373737 15%, #282828 70%, #3c4859 94%);
  background: linear-gradient(-150deg, #373737 15%, #282828 70%, #3c4859 94%);
  span {
    -webkit-transition: 0.4s all;
    -o-transition: 0.4s all;
    transition: 0.4s all;
    position: absolute;
    height: 190px;
  }
  span:nth-child(1) {
    display: none;
    top: 0;
    width: 33.33333%;
    right: -16.66666%;
    background: #373737;
  }
  span:nth-child(2) {
    width: 33.33333%;
    top: 0;
    right: 16.66666%;
    left: auto;
    bottom: auto;
    background: #2e2e2e;
  }
  span:nth-child(3) {
    width: 33.33333%;
    right: 49.99999%;
    bottom: auto;
    left: auto;
    background: #222222;
  }
  span:nth-child(4) {
    width: 33.33333%;
    top: 380px;
    left: -16.66666%;
    background: #383d44;
  }
  span:nth-child(5) {
    width: 33.33333%;
    right: 0;
    bottom: 0;
    background: #2e2e2e;
  }
`;

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      <StyledBackground>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </StyledBackground>

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
