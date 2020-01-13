import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components'

const StyledAppBar = styled.div`
  background-color: #313a46;
  width: 250px;
  height: 100vh;
  padding: 16px;
  position: fixed;
  left: 0;
  top: 0;
`;

const AppBar = ({ incomingData }) => (
  <StyledAppBar>
    <h1>The spectacle</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </StyledAppBar>
)

export default AppBar