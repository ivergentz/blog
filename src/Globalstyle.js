import React from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
    --dark-blue: #081226;
    --bright-blue: #023059;
    --yellow: #F2CD5E;
    --bright-orange: #F29F05;
    --dark-orange: #F28705;

}


* {
    box-sizing: border-box;
}

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    font-size: 117.5%;
    background: var(--dark-blue);
  }
`

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
