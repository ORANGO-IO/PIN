import styled, { css } from "styled-components";

export default styled.li<{ status: "Active" | "Disabled" | "Normal" }>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  column-gap: 13px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: "Ubuntu", sans-serif;

  > div {
    display: flex;
  }

  svg,
  svg path {
    fill: #3c3c3c;
  }
  p {
    color: #3c3c3c;
    margin: 0;
    font-size: 15px;
    font-family: "Ubuntu", sans-serif;
  }

  :hover {
    background-color: #f7f7f7;
  }

  ${({ status }) => {
    switch (status) {
      case "Active":
        return css`
          background-color: #00d56c;
          svg,
          svg path {
            fill: #000;
          }
          p {
            color: #000000;
          }
          :hover {
            background-color: #00d56c;
          }
        `;
      case "Disabled":
        return css`
          background-color: #ffffff;
          svg,
          svg path {
            fill: #c9c9c9;
          }
          p {
            color: #c9c9c9;
          }
        `;
      default:
    }
  }}
`;
