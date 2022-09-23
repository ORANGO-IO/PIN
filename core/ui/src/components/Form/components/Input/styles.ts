import styled, { css } from 'styled-components';

export default styled.div<{
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
}>`
  display: flex;
  width: 100%;
  label {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #98948f;
    text-shadow: 0px 1px 0px rgba(255, 255, 255, 0.25);
    font-family: 'Ubuntu', sans-serif;
  }

  input {
    width: 100%;
    font-family: 'Ubuntu', sans-serif;
    background: #fcfcfc;
    height: 27px;
    border: 1px solid #929292;
    box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85),
      inset 0px 1px 0px 1px rgba(0, 0, 0, 0.06);
    border-radius: 5px;
    padding-left: 6px;

    :focus {
      border: 1px solid #db815d;
      outline: none;
    }

    ::placeholder {
      color: #d7d7d7;
    }
  }

  ${({ labelPosition }) => {
    switch (labelPosition) {
      case 'bottom':
        return css`
          flex-direction: column-reverse;
        `;
      case 'top':
        return css`
          flex-direction: column;
        `;
      case 'right':
        return css`
          flex-direction: row-reverse;
        `;
      case 'left':
        return css`
          align-items: center;
          label{
          margin-right: 6px;

          }
l        `;
      default:
    }
  }}
`;
