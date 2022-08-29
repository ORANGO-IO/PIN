import React, { ButtonHTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLButtonElement */

interface IProgramIconProp extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon?:React.ReactNode
    text:string
}

const ProgramIcon:React.FC<IProgramIconProp> = ({ icon, text, ...rest }) => (
    <Container type="button" {...rest}>
        <div>
        {icon}
        </div>
        <p>{text}</p>
    </Container>
)

export default ProgramIcon
