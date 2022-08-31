import styled, { css } from 'styled-components'

export default styled.aside<{sizeType:'normal'|'small';open:boolean;width:number}>`
    width: 100%;
    max-width:240px;
    height: 100%;
    z-index:1;
    margin-left:0;
    ul{
        margin:0;
        padding:0;
        background:#fff;
        height:100%;
        z-index:2;
        width: 100%;
        max-width:240px;
        border-right: 1px solid #E0DEDC;
        box-shadow: 1px 0px 0px rgba(255, 255, 255, 0.25);
        flex:1;
        align-self:stretch;
    }
    nav{
        overflow:auto;
        display:flex;
        height:100%;

    }


    ${({ sizeType, open, width }) => {
        switch (sizeType) {
            case 'small':
                return css`
                position:absolute;
                top:0;
                left:0;
                margin-left:${open ? 0 : `-${width}px`};
                transition:margin-left 0.2s linear;

                    .modal{
                        opacity:${open ? 1 : 0};
                        pointer-events:all;
                        height:${open ? '100%' : 0}

                    }
                `
        }
    }}

`

export const ButtonStyle = styled.div`
    width:20px;
    height:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    span{
        width:100%;
        background: #DADADA;
        height:2px;
        display:flex;
    }
`

export const ButtonContainer = styled.span`
    min-width:50px;
    height:0;
`

export const Modal = styled.button<{sizeType:'normal'|'small';open:boolean}>`
    position:absolute;
    width:100%;
    height:0;
    padding:0;
    border:none;
    top:0;
    left:0;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(5px);
    opacity:0;
    pointer-events:none;

    ${({ sizeType, open }) => {
        switch (sizeType) {
            case 'small':
                return css`
                        opacity:${open ? 1 : 0};
                        pointer-events:all;
                        height:${open ? '100%' : 0};

                `
        }
    }}
`
