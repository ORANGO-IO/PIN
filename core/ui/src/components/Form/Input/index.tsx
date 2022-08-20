import React, { InputHTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLInputElement */
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    labelPosition?:'Top'|'Bottom'|'Left'|'Right'
    label?:string
}

const Input:React.FC<InputProps> = ({ labelPosition, label, ...rest }) => (
    <Container labelPosition={labelPosition}>
        {label &&
        <label>{label}</label>
        }
        <input {...rest}/>
    </Container>
)

export default Input
