import styled from 'styled-components'

export default styled.div`
    width:100%;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    height: 230px;
    padding:21px;
    box-sizing: border-box;

    h2{
        font-weight: 400;
        font-size: 24px;
        color: #FFFFFF;
    }

    >div{
        margin-top:36px;
        display:flex;
        column-gap:22px;

        >div{
            max-width:130px;
            max-height:120px;
        }
        p{
            font-weight: 300;
            font-size: 14px;
            line-height: 16px;

            color: rgba(255, 255, 255, 0.8);
        }
    }
`
