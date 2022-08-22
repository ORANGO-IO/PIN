import React, { useState } from 'react'
import MenuButton from './components/Button'
import ExplicationProgramIcon from './components/ExplicationProgramIcon'
import Container from './style'

const Menu = () => {
  const [open, setOpen] = useState(false)

  return <Container open={open}>
    <ExplicationProgramIcon className='explication' title="Titulo" icon={<p></p>} text="teste" style={{ position: 'absolute', bottom: '104px', width: '80%' }}/>
    <MenuButton onClick={() => setOpen(!open)} className="buttonMenu"/>
  </Container>
}

export default Menu
