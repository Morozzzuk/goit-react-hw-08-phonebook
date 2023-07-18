import styled from '@emotion/styled';

export const SectionContainer = styled.div`
  display: flex;
  padding: 15px;
  max-width: 90%;
  height: 86%;
  gap: 15px;
  margin: 0 auto;
  margin-top: 20px;
  border: 1px solid black;
  overflow: hidden;

  @media (max-width: 480px) {
    flex-direction: column;
    overflow: visible;
    max-width: 100%;
    padding: 10px;
  }
`;
export const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: none;
  width: 70%;
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
export const ContainerL = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 15px;
  justify-content: space-between;
  flex-direction: column;
  background-color: none;
  width: 30%;
  @media (max-width: 850px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 100%;
  }
`;
