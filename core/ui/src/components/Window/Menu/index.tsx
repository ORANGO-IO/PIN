import React, { useState } from 'react'
import MenuButton from './components/Button'
import ExplicationProgramIcon from './components/ExplicationProgramIcon'
import ProgramIcon from './components/ProgramIcon'
import Container from './style'

type program={ ProgramIcon: React.ReactNode, programText: string;ExplicationProgramText:string; TitleExplication: string, ExplicationProgramIcon: React.ReactNode ;key:number}
interface MenuProps{
  programs?:program[]
}

const Menu:React.FC<MenuProps> = ({ programs }) => {
  const [open, setOpen] = useState(false)
  const [focusProgram, setFocusProgram] = useState<program>()
  return <Container open={open}>
    {programs && programs.map(program => (
      <ProgramIcon key={program.key} onMouseEnter={() => setFocusProgram(program)} onMouseLeave={() => setFocusProgram(undefined)} text={program.programText} />
    ))}
    <ExplicationProgramIcon show={!!focusProgram} className='explication' title={focusProgram?.TitleExplication } icon={focusProgram?.ExplicationProgramIcon} text={focusProgram?.ExplicationProgramText} style={{ position: 'absolute', bottom: '104px', width: '80%' }}/>
    <MenuButton onClick={() => setOpen(!open)} className="buttonMenu"/>
  </Container>
}

export default Menu
