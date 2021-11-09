import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = ({ cards }) => {
  return (
    <Container>
      {cards.map(card => (
        <CardSection key={card.id}>
          <BgImg
            style={{
              backgroundImage: `url(${card.img})`,
            }}
            alt=""
            url={card.img}
          >
            <TextContainer>
              <Teaser>{card.teaser}</Teaser>
              <Header>{card.header}</Header>
              <TeaserText>{card.teasertext}</TeaserText>
              <Link
                to={{
                  pathname: `/blog-entry/${card.id}`,
                  state: { cards: card },
                }}
              >
                <Button>weiterlesen...</Button>
              </Link>
            </TextContainer>
          </BgImg>
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
  position: relative;
  height: 25rem;
  border-radius: 10px;
  margin-bottom: 10vh;
`

const BgImg = styled.div`
  height: 100%;
  border-radius: 1rem;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`
const TextContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 0 1.5rem 1rem;
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
