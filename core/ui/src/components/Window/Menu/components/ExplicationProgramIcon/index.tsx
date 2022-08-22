import React, { HTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLDivElement */
interface ExplicationProgramIconProps extends HTMLAttributes<HTMLDivElement>{
    title:string
    icon:React.ReactNode
    text:string
}

const ExplicationProgramIcon:React.FC<ExplicationProgramIconProps> = ({ icon, text, title, ...rest }) => (
    <Container {...rest}>
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
