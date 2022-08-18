import React, { ButtonHTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLButtonElement */

const MenuButton:React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => (
    <Container type="button" {...props}>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Container>
)

export default MenuButton
