import styled from 'styled-components'

export default styled.div<{colorText:string;background:string}>`
    color:${({ colorText }) => colorText};
    background:${({ background }) => background};
    border: 1px solid #929292;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85), inset 0px 1px 0px 1px rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    height:14px;
    padding:2px 4px;
    font-size: 8px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 5px;
    width: fit-content;
    font-family: 'Ubuntu', sans-serif;
`
