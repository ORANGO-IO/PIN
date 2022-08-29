import React, { HTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLDivElement */
interface IExplicationProgramIconProps extends HTMLAttributes<HTMLDivElement>{
    title?:string
    icon?:React.ReactNode
    text?:string
    show:boolean
}

const ExplicationProgramIcon:React.FC<IExplicationProgramIconProps> = ({ icon, text, title, show, ...rest }) => (
    <Container {...rest} show={show}>
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
