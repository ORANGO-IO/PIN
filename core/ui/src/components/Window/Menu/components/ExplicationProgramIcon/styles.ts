import styled, { css } from 'styled-components'

export default styled.div<{show:boolean}>`
    width:100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    height: 230px;
    padding:21px;
    box-sizing: border-box;
    opacity:0;
    transition:opacity 0.2s linear;
    ${({ show }) => show && css`
        opacity:1;
    `}

    h2{
        font-weight: 400;
        font-size: 24px;
        color: #FFFFFF;
        font-family: 'Ubuntu', sans-serif;
    }

    >div{
        margin-top:36px;
        display:flex;
        column-gap:22px;

        >div{
            max-width:130px;
            max-height:120px;
        }
        p{
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;
            font-family: 'Ubuntu', sans-serif;
            color: rgba(255, 255, 255, 0.8);
        }
    }
`
