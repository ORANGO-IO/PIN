import React from 'react'
import Container from './styles'

interface ButtonProps{
    typeColor:'success' |'disabled'|'normal'|'send';
    content:React.ReactNode
}

const Button:React.FC<ButtonProps> = ({ content, typeColor }) => <Container typeColor={typeColor}>{content}</Container>

export default Button
