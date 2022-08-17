import React from 'react'
import Container from './styles'

interface OptionBarProps{
    status:'Active'|'Disabled'|'Normal';
    text:string
    element:React.ReactNode
}

const OptionBar:React.FC<OptionBarProps> = ({ status, text, element }) => (
    <Container status={status}>
        <div>{element}</div>
        <p>{text}</p>
    </Container>
)

export default OptionBar
