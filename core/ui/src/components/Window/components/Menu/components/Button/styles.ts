import styled from 'styled-components'

export default styled.button`
    display:flex;
    flex-direction:column;
    row-gap:6px;
    background:none;
    border:none;
    cursor:pointer;

    div{
        display:flex;
        column-gap:6px;
        span{
            width:6px;
            height:6px;
            background: #00D56C;
            border-radius:100%;
            display:block;
        }
    }
`
