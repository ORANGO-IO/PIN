import React from 'react'
import HeaderButton from './components/HeaderButton'
import Container from './styled'
/* global HTMLButtonElement */

interface HeaderProps{
    title:string
    buttonClick?:React.MouseEventHandler<HTMLButtonElement>
    buttonDisabled?:boolean
    leftComponent?:React.ReactNode
}

const Header:React.FC<HeaderProps> = ({ title, buttonDisabled, buttonClick, leftComponent }) => (
    <Container>
        <div><HeaderButton disabled={buttonDisabled} onClick={buttonClick}>oi</HeaderButton></div>
        <p>{title}</p>
        <div>{leftComponent}</div>
    </Container>
)

export default Header
