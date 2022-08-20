import styled, { css } from 'styled-components'

export default styled.div<{open:boolean}>`
    width:100%;
    height:66px;
    transition: height 0.2s linear;

    background: rgba(77, 76, 72, 0.8);
    backdrop-filter: blur(60px);
    position:absolute;
    bottom:0;
    z-index:5;
    left:0;
    box-sizing:border-box;
    transition:height 0.5s linear;
    
    .container{
        position:absolute;
        top:0;
    }

    .buttonMenu{
        position:absolute;
        bottom:18px;
        left:18px;

    }
    
    ${({ open }) => open && css`
        height:100vh;
    `}
`
