import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  max-width: 768px;
  height: 90vh;

  margin: 20px 0 0 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    width: 768px;
    margin: 20px auto;
  }
`;
