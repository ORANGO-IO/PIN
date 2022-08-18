import React, { useState } from 'react'
import MenuButton from './components/Button'
import Container from './style'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return <Container open={open}>
    <MenuButton onClick={() => setOpen(!open)} className="buttonMenu"/>
  </Container>
}

export default Menu
