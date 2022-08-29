import styled, { css } from 'styled-components'

export default styled.div<{open:boolean}>`
    display:flex;
    width:100%;
    height:66px;
    flex-direction:column;
    transition: height 0.2s linear;
    align-items:baseline;

    background: rgba(77, 76, 72, 0.8);
    backdrop-filter: blur(60px);
    position:absolute;
    bottom:0;
    z-index:5;
    left:0;
    box-sizing:border-box;
    transition:height 0.5s linear;
    justify-content:space-between;
    
    .container{
        position:absolute;
        top:0;
    }

    .buttonMenu{
        position:absolute;
        bottom:18px;
        left:18px;

    }

    .menu_programs_container{
        display:flex;
        flex-wrap:wrap;
        transition:opacity 0.2s linear;
        padding-bottom:16px;
        overflow:auto;
    }
   
    ${({ open }) => !open && css`
        .explication,.menu_programs_container{
            opacity:0;
            user-select:none;
            padding:0;
            pointer-events:none;
        }

    `} 
    ${({ open }) => open && css`
        padding:0 10vw;
        padding-top:32px;
        height:100vh;
        padding-bottom:95px;

    `}
`
