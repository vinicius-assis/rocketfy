import React from 'react'

import { Container, Label } from './styles'

import Avatar from '../../assets/profile.png'

const Card = () => {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração completa de servidor!</p>
      <img src={Avatar} alt="User avatar"/>
    </Container>    
  )
}

export default Card
