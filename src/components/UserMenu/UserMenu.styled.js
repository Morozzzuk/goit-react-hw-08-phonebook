import styled from '@emotion/styled';
export const UserContainer = styled.div`
  display: flex;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const UserTitle = styled.h2`
  margin: 15px;
  margin-left: 10px;
  font-size: large;
  display: block;
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  color: black;
  &:hover {
    scale: 1.2;
    color: white;
  }

  @media (max-width: 650px) {
    margin: 0;
  }
`;
export const UserButton = styled.h2`
  margin: 15px;
  margin-left: 5px;
  font-size: large;
  display: block;
  padding: 8px;
  text-align: center;
  border-radius: 6px;
  text-decoration: none;
  color: black;

  &:hover {
    scale: 1.2;
    color: white;
  }
  @media (max-width: 650px) {
    margin: 0;
  }
`;
