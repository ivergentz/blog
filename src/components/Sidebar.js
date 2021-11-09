import Hamburger from 'hamburger-react'
import React from 'react'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      {console.log(isOpen)}
      <p>Moin hier ists Menu</p>
      <Hamburger onClick={toggle} />
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  height: 100vh;
  width: 100vw;
  overflow-y: hidden;
  position: fixed;
  z-index: 1090;
  background: white;
  color: orange;
`
