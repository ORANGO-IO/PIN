import styled, { css } from 'styled-components'

export default styled.button<{typeColor:'success' |'disabled'|'normal'|'send'|'secondary'}>`
    width:auto;
    height:31px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;

    ${({ typeColor }) => {
        switch (typeColor) {
            case 'normal':
                return css`
                    background: linear-gradient(180deg, #F28665 0%, #DF4F1D 100%);
                    border: 1px solid #363632;
                    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.05), inset 0px 0px 2px 1px #F38B6B;
                `
            case 'secondary':
                return css`
                    background: linear-gradient(180deg, #FFFFFF 0%, #F3F1F1 100%);
                    border: 1px solid #929292;
                    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px #FFFFFF;
                `
        }
    }}

    :disabled{
        background: linear-gradient(180deg, #58554D 0%, #42413C 100%);
        border: 1px solid #363632;
        box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.05), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.2);
        border-radius: 5px;
    }
`