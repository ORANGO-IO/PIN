import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box

    }

    #app{
        height:100vh;
        display: flex; 
        justify-content: center; 
        align-items: end ;
    }

    p{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #8C8C8C;
    }

    h2{
        font-family: 'Ubuntu';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 17px;

        color: #4C4F4F;

    }

    a{
        text-decoration:none;
    }
`;
