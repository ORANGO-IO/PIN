import styled, { css } from 'styled-components'

export default styled.li<{status:'Active'|'Disabled'|'Normal'}>`
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    padding:0 14px;
    column-gap:13px;
    box-sizing:border-box;
    cursor:pointer;

    >div{
        display:flex;
    }

    svg,svg path{
        fill:#3C3C3C;
    }
    p{
        color:#3C3C3C;
        margin:0;
        font-size:15px
    }


    ${({ status }) => {
        switch (status) {
            case 'Active':
                return css`
                    background-color:#00D56C;
                    svg,svg path{
                        fill:#000;
                    }
                    p{
                        color: #000000;
                    }
                    `
            case 'Disabled':
                return css`
                    background-color:#FFFFFF;
                    svg,svg path{
                        fill:#C9C9C9;
                    }
                    p{
                        color:#C9C9C9
                    }
                `
            default:
        }
    }}

    :hover{
        background-color:#F7F7F7
    }
`
