import React, { useState } from 'react'
import styled from 'styled-components'
import BlogEntry from '../components/BlogEntry'
import Card from '../components/Card/Card'
import { cards } from '../components/Card/cards.js'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Homepage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Header toggle={toggle} />
      <Container>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Card cards={cards}>
          <BlogEntry />
        </Card>
      </Container>
    </>
  )
}

export default Homepage

const Container = styled.div`
  padding: 3rem;
  max-width: 1100px;
  margin: 0 auto;
`
