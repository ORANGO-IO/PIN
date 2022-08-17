import React from 'react'
import Button from '../../Button'
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
        <div><Button disabled={buttonDisabled} onClick={buttonClick} content="oi" typeColor='normal'/></div>
        <p>{title}</p>
        <div>{leftComponent}</div>
    </Container>
)

export default Header
