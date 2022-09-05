import styled, { css } from 'styled-components'

export default styled.div`
    display:flex;
    width:100%;
    height:66px;
    flex-direction:column;
    transition: height 0.2s linear;
    align-items:baseline;
    z-index:10;
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
    
`

export const MenuOpen = styled.div<{open:boolean}>`
    position:fixed;
    top:0;
    left:0;
    width:100vw;
    height:calc(100vh - 66px);
    background: rgba(77, 76, 72, 0.8);
    backdrop-filter: blur(60px);
    z-index:10;
    box-sizing:border-box;
    padding:0 10vw;
    padding-top:32px;
    padding-bottom:95px;
    display:flex;
    transition: opacity 0.5s linear;
    flex-direction:column;

    ${({ open }) => !open && css`
        opacity:0 !important;
        pointer-events:none;
        user-select:none;
    `} 

    .menu_programs_container{
        display:flex;
        flex-wrap:wrap;
        transition:opacity 0.2s linear;
        padding-bottom:16px;
        overflow:visible;
        align-items:baseline;
        flex:1;
    }
`
