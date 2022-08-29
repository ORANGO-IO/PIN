import styled from 'styled-components'

export default styled.div<{open:boolean}>`
    width:100vw;
    height:100vh;
    z-index:5;
    position:fixed;
    top:0;
    left:0;
    display:${({ open }) => open ? 'flex' : 'none'};
    align-items:center;
    justify-content:center;

    .button-modal{
        position:absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background: rgba(77, 76, 72, 0.8);

    }

    >div{
        z-index:2;
    }
    
`
