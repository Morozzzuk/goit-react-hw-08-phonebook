import styled from '@emotion/styled';

export const Ul = styled.ul`
  padding: 15px;
  width: 100%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;
  overflow: auto;

  border-radius: 5px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
`;

export const P = styled.p`
  border-radius: 5px;
  text-align: center;
  display: block;
  font-size: 18px;
  padding: 10px;
  color: #000;

  margin-bottom: 10px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;

    font-size: 16px;
  }
`;

export const Li = styled.li`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  border-radius: 5px;
  border: 2px solid black;
  gap: 10px;
  background-color: #fff;
  transition: background-color 0.3s ease;
  span {
    width: 70%;
  }
  :hover {
    background-color: orange;
    border: 2px solid red;
  }
`;

export const Button = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid black;
  background: #fff;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  transition: scale 0.3s ease;
  :focus,
  :hover {
    background: #2196f3;
    color: #fff;
    scale: 1.1;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;
export const ContainerR = styled.div`
  padding: 15px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 15px;

  background: lightblue;
  border-radius: 5px;

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;
