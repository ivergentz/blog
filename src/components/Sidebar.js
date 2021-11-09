import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <FaRegWindowClose onClick={toggle} />
      <p>Moin hier ists Menu</p>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  height: 80vh;
  width: 70vw;
  overflow-y: hidden;
  position: fixed;
  background: white;
  color: orange;
  right: 0;
  top: 0;
  z-index: 1000;
`
