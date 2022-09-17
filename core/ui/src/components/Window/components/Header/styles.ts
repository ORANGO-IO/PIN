import styled from 'styled-components';

export default styled.header`
  min-height: 41px;
  background: linear-gradient(180deg, #59574e 0%, #3c3b37 100%);
  border-top: 1px solid #626055;
  box-shadow: 0px -1px 0px #4f4e47;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;

  p {
    color: #d5cfc7;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    font-weight: 700;
    font-size: 15px;
    font-family: 'Ubuntu', sans-serif;
  }

  .button_header_container {
    display: flex;
    align-items: center;
    column-gap: 7px;
  }
`;
