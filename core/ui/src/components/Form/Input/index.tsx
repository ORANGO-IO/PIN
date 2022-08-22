import React, { InputHTMLAttributes, LabelHTMLAttributes } from 'react'
import Container from './styles'
/* global HTMLInputElement */
/* global HTMLLabelElement */
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    labelPosition?:'Top'|'Bottom'|'Left'|'Right'
    label?:string,
    labelStyle?:LabelHTMLAttributes<HTMLLabelElement>
}

const Input:React.FC<InputProps> = ({ labelPosition, label, labelStyle, ...rest }) => (
    <Container labelPosition={labelPosition}>
        {label &&
        <label style={labelStyle}>{label}</label>
        }
        <input {...rest}/>
    </Container>
)

export default Input
