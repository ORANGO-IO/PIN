import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: auto;
  display: flex;
  column-gap: 8px;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 27px;
    cursor: pointer;
    padding: 6px;
    height: 27px;
    font-family: 'Ubuntu', sans-serif;
    background: linear-gradient(180deg, #e0e0e0 0%, #f3f3f3 100%);
    border: 1px solid #db815d;
    box-shadow: 0px 0px 2px #db815d, 0px 1px 0px rgba(255, 255, 255, 0.85),
      inset 0px 1px 0px 1px #ffffff;
    border-radius: 5px;
  }
`;
