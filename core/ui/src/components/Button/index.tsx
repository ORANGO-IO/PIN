import React, { ButtonHTMLAttributes } from 'react'
import Container from './styles'

/* global HTMLButtonElement */

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
    customType?:'green-confirm'|'orange-warning'|'dark' | 'default'
}

const Button:React.FC<IButtonProps> = ({ children, ...rest }) => (
    <Container {...rest}>
        {children}
    </Container>
)

export default Button
