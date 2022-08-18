import React from 'react'
import Container from './styles'

interface ExplicationProgramIconProps{
    title:string
    icon:React.ReactNode
    text:string
}

const ExplicationProgramIcon:React.FC<ExplicationProgramIconProps> = ({ icon, text, title }) => (
    <Container>
        <h2>{title}</h2>
        <div>
            <div>
            {icon}

            </div>
            <p>{text}</p>
        </div>
    </Container>
)

export default ExplicationProgramIcon
