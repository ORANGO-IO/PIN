import styled from 'styled-components'

export default styled.header`
    height:41px;
    background: linear-gradient(180deg, #59574E 0%, #3C3B37 100%);
    border-top: 1px solid #626055;
    box-shadow: 0px -1px 0px #4F4E47;
    border-radius: 5px 5px 0px 0px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 8px;
    
    p{
        color: #D5CFC7;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
        font-weight: 700;
        font-size: 15px;
        font-family: 'Ubuntu', sans-serif;
    }

    .button_header_container{
        display:flex;
        align-items:center;
        column-gap:7px;
    }
`
