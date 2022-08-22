import styled, { css } from 'styled-components'

export default styled.div<{labelPosition?:'Top'|'Bottom'|'Left'|'Right'}>`
    display:flex;
    width:100%;
    align-items:center;
    label{
        font-family: 'Ubuntu';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #98948F;
    margin-right:8px;

    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
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
        default:
    }
}}
`
