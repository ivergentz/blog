import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

const Header = ({ toggle }) => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', hideNav)
  }, [])

  const hideNav = () => {
    window.scrollY >= 40 ? setScroll(true) : setScroll(false)
  }

  return (
    <Container onScroll={scroll ? setScroll : undefined}>
      <LogoContainer>
        <Logo>Ich brauch' Internet</Logo>
        <div onClick={toggle}>
          <BurgerMenu />
        </div>
      </LogoContainer>
    </Container>
  )
}

export default Header

const Container = styled.section`
  display: ${({ onScroll }) => (onScroll ? 'none' : '')};
  height: 10vh;
  width: 100%;
  background: var(--bright-blue);
  color: var(--dark-orange);
  position: fixed;
  z-index: 100;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2vh;

  div {
    margin-right: 7vw;
  }
`

const Logo = styled.h1`
  margin: 0 0 0 7vw;
`

const BurgerMenu = styled(FaBars)`
  font-size: 2rem;
  cursor: pointer;
`
