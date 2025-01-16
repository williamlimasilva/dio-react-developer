import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 80%;

  h3 {
    font-size: 32px;
    color: #fafafa;
  }

  p {
    font-size: 16px;
    color: #fafafa60;
    margin-bottom: 20px;
  }
  a.showRepo {
    background-color: #247bcc;
    border: 1px solid #114c83;
    border-radius: 2rem;
    padding: 1.5rem;
    color: #fafafa;
    text-decoration: none;
    text-transform: uppercase;
    margin-bottom: 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &:hover {
      cursor: pointer;
      background-color: #114c83;
    }
  }
  button.remover {
    background-color: #e74c3c;
    border: 1px solid #c0392b;
    color: #fafafafa;
    border-radius: 2rem;
    padding: 1.5rem;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    width: 100%;

    &:hover {
      cursor: pointer;
      background-color: #c0392b;
    }
  }

  hr {
    color: #fafafa60;
    margin: 20px 0;
  }
`;
