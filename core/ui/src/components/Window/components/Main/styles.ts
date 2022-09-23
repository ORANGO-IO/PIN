import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  background: #f2f1f0;
  display: flex;
  overflow: auto;
  flex-direction: column;
  margin-right: 3px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #626055;
    width: 5px;
  }
`;
