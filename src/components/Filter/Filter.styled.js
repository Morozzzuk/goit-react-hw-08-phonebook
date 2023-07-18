import styled from '@emotion/styled';

export const CardContainer = styled.div`
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  background: lightblue;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

export const CardLabel = styled.label`
  font-size: 16px;
  color: black;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 16px;
  :hover {
    border: 2px solid green;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
