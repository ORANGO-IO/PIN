import styled, { css, keyframes } from 'styled-components'

const height = keyframes`
    from {
    opacity:0;
  }

  to {
    opacity:1;
  }
`

export default styled.div<{open:boolean}>`
    display:flex;
    justify-content:center;
    padding:0 10vw;
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
    .explication{
        opacity:0;
        user-select:none;
        pointer-events:none;
    }
    
    ${({ open }) => open && css`
        height:100vh;
        .explication{
            animation-name:${height};
            animation-delay:0.5s;
            animation-duration: 0s;
            animation-fill-mode: forwards;
        }

    `}
`
