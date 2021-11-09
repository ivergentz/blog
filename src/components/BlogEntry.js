import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const BlogEntry = () => {
  const { state } = useLocation()

  return (
    <>
      <SiteHeader>
        <Teaser>
          {state.cards.date} {state.cards.teaser}
        </Teaser>
      </SiteHeader>
      <Container>
        <CardSection>
          <Header>{state.cards.header}</Header>
          <PrevImg src={state.cards.img} alt="" />
          <Text>{state.cards.text1}</Text>

          <PrevImg src={state.cards.img2} alt="" />

          <Subhead>{state.cards.subhead}</Subhead>
          <Text>{state.cards.text2}</Text>
          <Link to="/">
            <Button>back</Button>
          </Link>
        </CardSection>
      </Container>
    </>
  )
}

export default BlogEntry

const SiteHeader = styled.section`
  height: 10vh;
  width: 100%;
  background: var(--bright-blue);
  color: var(--dark-orange);
  position: fixed;
  z-index: 100;
`

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
  z-index: 0;
`

const CardSection = styled.div`
  background: var(--bright-blue);
  border-radius: 10px;
  margin-bottom: 10vh;
  padding: 3vh;

  :first-child {
    margin-top: 15vh;
  }
`
const Header = styled.h3`
  color: var(--dark-orange);
  font-size: 1.7rem;
`

const Teaser = styled.h2`
  color: var(--yellow);
  font-size: 1rem;
  margin-bottom: -0.8rem;
`

const PrevImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 3vh auto;
`

const Text = styled.p`
  color: var(--yellow);
  font-size: 1rem;
`

const Subhead = styled.h4`
  color: yellow;
`

const Button = styled.button`
  border: 2px solid var(--dark-blue);
  color: var(--dark-orange);
  background: var(--dark-blue);
  border-radius: 4px;
  padding: 2vh;
  font-size: 1rem;
  cursor: pointer;
`
