import styled, { css } from 'styled-components';

export default styled.button<{
  customType?: 'green-confirm' | 'orange-warning' | 'dark' | 'default';
}>`
  width: auto;
  height: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-family: 'Ubuntu', sans-serif;
  background: linear-gradient(180deg, #ffffff 0%, #f3f1f1 100%);
  border: 1px solid #929292;
  box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.85),
    inset 0px 1px 0px 1px #ffffff;
  border-radius: 5px;
  cursor: pointer;
  padding: 0 8px;

  ${({ customType }) => {
    switch (customType) {
      case 'green-confirm':
        return css`
          background: linear-gradient(180deg, #00d56c 0%, #04bb61 100%);
          border: 1px solid #363632;
        `;
      case 'orange-warning':
        return css`
          background: linear-gradient(180deg, #f28665 0%, #df4f1d 100%);
          border: 1px solid #363632;
          box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.05),
            inset 0px 0px 2px 1px #f38b6b;

          :hover {
            background: linear-gradient(180deg, #f0805d 0%, #ef7c5a 100%);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25),
              0px 1px 0px rgba(255, 255, 255, 0.85),
              inset 0px 1px 0px 1px #ffa98f inset;
          }

          :active {
            background: linear-gradient(180deg, #e45e31 0%, #f28868 100%);
            border: 1px solid #db815d;
            box-shadow: 0px 0px 2px #db815d,
              0px 1px 0px rgba(255, 255, 255, 0.85),
              inset 0px 1px 0px 1px #ffa98f;
          }
        `;
      case 'dark':
        return css`
          background: linear-gradient(180deg, #58554d 0%, #42413c 100%);
          border: 1px solid #363632;
          box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.05),
            inset 0px 0px 2px 1px rgba(255, 255, 255, 0.2);
          :hover {
            background: linear-gradient(180deg, #58554d 0%, #57544d 100%);
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25),
              0px 1px 0px rgba(255, 255, 255, 0.85),
              inset 0px 1px 0px 1px #6b6a62 inset;
          }

          :actiev {
            background: linear-gradient(180deg, #3f3d38 0%, #58554d 100%);
            border: 1px solid #db815d;
            box-shadow: 0px 0px 2px #db815d,
              0px 1px 0px rgba(255, 255, 255, 0.85),
              inset 0px 1px 0px 1px #6b6a62;
          }
        `;
      default:
        return css`
          :hover {
            background: linear-gradient(180deg, #ffffff 0%, #fcfcfc 100%);
            border: 1px solid #929292;
            box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25),
              0px 1px 0px rgba(255, 255, 255, 0.85),
              inset 0px 1px 0px 1px #ffffff;
          }
          :active {
            background: linear-gradient(180deg, #e0e0e0 0%, #f3f3f3 100%);
            border: 1px solid #db815d;
            box-shadow: 0px 0px 2px #db815d,
              0px 1px 0px rgba(255, 255, 255, 0.85),
              inset 0px 1px 0px 1px #ffffff;
          }
        `;
    }
  }}

  :active {
    border: 1px solid #db815d;
  }
`;
