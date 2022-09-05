import styled from 'styled-components'

export default styled.div`
    width:100%;
    height:auto;
    display:flex;
    column-gap:8px;
    align-items:center;
    justify-content:center;

    button{
        display:flex;
        align-items:center;
        justify-content:center;
        width: 27px;
        cursor:pointer;
        padding:6px;
        height: 27px;
        font-family: 'Ubuntu', sans-serif;
        background: linear-gradient(180deg, #E0E0E0 0%, #F3F3F3 100%);
        border: 1px solid #DB815D;
        box-shadow: 0px 0px 2px #DB815D, 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px #FFFFFF;
        border-radius: 5px;
    }
`
