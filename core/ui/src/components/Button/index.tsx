import React, { ButtonHTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLButtonElement */
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    typeColor:'success' |'disabled'|'normal'|'send' | 'secondary';
    content:React.ReactNode
}

const Button:React.FC<ButtonProps> = ({ content, typeColor, ...rest }) => <Container typeColor={typeColor} {...rest}>{content}</Container>

export default Button
