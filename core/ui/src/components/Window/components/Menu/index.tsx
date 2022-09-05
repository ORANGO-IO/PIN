import React, { useState } from 'react'
import MenuButton from './components/Button'
import ExplicationProgramIcon from './components/ExplicationProgramIcon'
import ProgramIcon from './components/ProgramIcon'
import Container, { MenuOpen } from './styles'
/* global HTMLButtonElement */

interface program{
  ProgramIcon: React.ReactNode,
  programText: string;
  ExplicationProgramText:string;
  TitleExplication: string,
  ExplicationProgramIcon: React.ReactNode;
  key:number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

interface IMenuProps{
  programs?:program[]
}

const Menu:React.FC<IMenuProps> = ({ programs }) => {
  const [open, setOpen] = useState(false)
  const [focusProgram, setFocusProgram] = useState<program>()

  return (
  <>
  <MenuOpen open={open}>
    <div className="menu_programs_container ">
      {programs && programs.map(program => (
        <ProgramIcon open={open} onClick={program.onClick} key={program.key} onMouseEnter={() => setFocusProgram(program)} icon={program.ProgramIcon} onMouseLeave={() => setFocusProgram(undefined)} text={program.programText} />
      ))}

    </div>
    <ExplicationProgramIcon show={!!focusProgram} className='explication' title={focusProgram?.TitleExplication } icon={focusProgram?.ExplicationProgramIcon} text={focusProgram?.ExplicationProgramText} />

  </MenuOpen>
  <Container >
    <MenuButton onClick={() => setOpen(!open)} className="buttonMenu"/>
  </Container>
  </>
  )
}

export default Menu
