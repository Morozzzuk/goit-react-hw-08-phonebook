import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  background: lightblue;
  label {
    color: black;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
  @media (max-width: 480px) {
    height: 100%;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  border: 2px solid black;
  border-radius: 5px;
  font-weight: 700;
  :focus,
  :hover {
    border-color: green;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;

  color: black;
  background: white;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  :focus,
  :hover {
    background: #2196f3;
    color: white;
  }
`;
