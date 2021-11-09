import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({ cards }) => {
  return (
    <Container>
      {cards.map(card => (
        <CardSection key={card.id}>
          <Teaser>{card.teaser}</Teaser>
          <Header>{card.header}</Header>
          <PrevImg src={card.img} alt="" />
          <TeaserText>{card.teasertext}</TeaserText>
          <Link
            to={{
              pathname: `/blog-entry/${card.id}`,
              state: { cards: card },
            }}
          >
            <Button>weiterlesen...</Button>
          </Link>
        </CardSection>
      ))}
    </Container>
  )
}

export default Card

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  grid-gap: 1rem;
  margin-top: 12vh;
`

const CardSection = styled.div`
  background: var(--bright-blue);
  border-radius: 10px;
  margin-bottom: 10vh;
  padding: 3vh;
`
const Teaser = styled.h3`
  color: var(--yellow);
  font-size: 1rem;
  margin-bottom: -0.8rem;
`
const Header = styled.h2`
  color: var(--dark-orange);
  font-size: 1.7rem;
`

const PrevImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin: 3vh auto;
`

const TeaserText = styled.p`
  color: var(--yellow);
  font-size: 1rem;
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
