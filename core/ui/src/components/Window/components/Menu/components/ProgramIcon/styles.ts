import styled, { css } from 'styled-components'

export default styled.div<{width:number | null; height: number | null; open:boolean}>`
    position:relative;
    width:64px;
    
    >button{
        display:flex;
        background:rgba(0,0,0,0);
        border:none;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        cursor:pointer;
        transition:transform 0.5s linear;
        transform:${({ width, height }) => `translateX(${width || 0}px) translateY(${height || 0}px)`} scale(0.2);

        ${({ open }) => open && css`
            transform:translate(0,0) scale(1);
        `}
        p{
            font-weight: 300;
            font-size: 10px;
            color: #fff;
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
}
`
