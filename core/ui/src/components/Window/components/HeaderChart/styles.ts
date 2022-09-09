import styled, { css } from 'styled-components';

export default styled.div<{ fixed?: boolean }>`
  display: flex;
  padding: 12px 41px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  flex-direction: column;

  p,
  pre {
    color: #000;
    font-size: 15px;
    font-weight: 400;
  }

  ${({ fixed }) =>
    fixed &&
    css`
      position: sticky;
      top: 0;
    `}
`;
