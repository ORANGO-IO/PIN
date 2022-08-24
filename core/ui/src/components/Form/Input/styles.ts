import styled, { css } from 'styled-components'

export default styled.div<{labelPosition?:'Top'|'Bottom'|'Left'|'Right'}>`
    display:flex;
    width:100%;
    label{
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 17px;
        color: #98948F;
        text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
        font-family: 'Ubuntu', sans-serif;
    }

    input{
        width:100%;
        font-family: 'Ubuntu', sans-serif;
        background: #FCFCFC;
        height:27px;
        border: 1px solid #929292;
        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px rgba(0, 0, 0, 0.06);
        border-radius: 5px;

        :focus{
            border: 1px solid #DB815D;
            outline:none;
            padding-left: 6px;
        }

        ::placeholder{        
            color: #D7D7D7;
        }
    }

${({ labelPosition }) => {
    switch (labelPosition) {
        case 'Bottom':
            return css`
                flex-direction:column-reverse;
            `
        case 'Top':
            return css`
                flex-direction:column;
            `
        case 'Right':
            return css`
                flex-direction:row-reverse;
            `
        case 'Left':
            return css`
                align-items:center;
            `
        default:
    }
}}
`
