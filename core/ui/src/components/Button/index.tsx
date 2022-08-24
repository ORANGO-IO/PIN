import styled from 'styled-components'

export default styled.button`
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
