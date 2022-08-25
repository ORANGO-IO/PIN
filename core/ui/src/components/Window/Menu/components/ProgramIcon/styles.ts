import styled from 'styled-components'

export default styled.button`
    display:flex;
    background:rgba(0,0,0,0);
    border:none;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    
    p{
        font-weight: 300;
        font-size: 10px;
        color: #fff;
        margin:0;
        transition: opacity 0.2s linear;
        font-family: 'Ubuntu', sans-serif;
        overflow: hidden;
        text-overflow: ellipsis;
        width:64px;
    
    }

    >div{
        display:flex;
        align-items:center;
        justify-content:center;
        transition: background 0.2s linear;
        border-radius: 16px;
        width:64px;
        height:64px;
    }
    
    :hover{
        >div{
            background: rgba(0, 0, 0, 0.1);

        }
        p{
            opacity:0;
            font-family: 'Ubuntu', sans-serif;
        }
    }
`
