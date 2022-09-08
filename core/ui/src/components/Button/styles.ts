import styled, { css } from 'styled-components'

export default styled.button<{customType?:'green-confirm'|'orange-warning'|'dark' | 'default'}>`
    width:auto;
    height:31px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:5px;
    font-family: 'Ubuntu', sans-serif;
    background: linear-gradient(180deg, #FFFFFF 0%, #F3F1F1 100%);
    border: 1px solid #929292;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px #FFFFFF;
    border-radius: 5px;
    cursor:pointer;
    padding:0 8px;
  
    ${({ customType }) => {
        switch (customType) {
            case 'green-confirm':
                return css`
                    background: linear-gradient(180deg, #00D56C 0%, #04BB61 100%);
                    box-shadow: none;
                    border: 1px solid #363632;
                `
            case 'orange-warning':
                return css`
                    background: linear-gradient(180deg, #F28665 0%, #DF4F1D 100%);
                    border: 1px solid #363632;
                    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.05), inset 0px 0px 2px 1px #F38B6B;
                `
            case 'dark':
                return css`
                    background: linear-gradient(180deg, #58554D 0%, #42413C 100%);
                    border: 1px solid #363632;
                    box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.05), inset 0px 0px 2px 1px rgba(255, 255, 255, 0.2);
                `
            default:
                return css`
                    :hover{
                        background: linear-gradient(180deg, #E0E0E0 0%, #F3F3F3 100%);
                        border: 1px solid #DB815D;
                        box-shadow: 0px 0px 2px #DB815D, 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px #FFFFFF;
                    }
                    :active{
                        background: linear-gradient(180deg, #FFFFFF 0%, #F3F1F1 100%);
                        border: 1px solid #DB815D;
                        box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px #FFFFFF;
                    }
                `
        }
    }}
  
     :hover{
        border: 1px solid #DB815D;
        
    }

    :active{
        border: 1px solid #DB815D;
    }
`
