import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px 48px;
`;

export const Card = styled.div`
  width: fit-content;
  min-width: 400px;
  max-height: 500px;
  overflow-y: auto;
  margin-top: 72px;
  padding: 32px 48px;
  height: 80%;
  background: #1f2124;
  border: 1px solid #cb9bde;
  border-radius: 6px;

  &::-webkit-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da alça da barra de rolagem */
    border-radius: 3px; /* Raio da alça da barra de rolagem */
  }

  &::-moz-scrollbar {
    width: 6px; /* Largura da barra de rolagem */
  }
  &::-moz-scrollbar-thumb {
    background-color: #888; /* Cor da alça da barra de rolagem */
    border-radius: 3px; /* Raio da alça da barra de rolagem */
  }
`;

export const Title = styled.h1`
  color: #af69cd;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 48px;
`;

export const AreaInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const LabelInput = styled.label`
  font-size: 12px;
  letter-spacing: 1px;
  color: #cfcfd8;
`;

export const Input = styled.input`
  width: 250px;
  height: 28px;
  border: none;
  border-radius: 6px 6px 0px 0px;
  border-bottom: 2px solid #cb9bde;
  background: unset;
  color: #cfcfd8;
  font-size: 14px;

  &::placeholder {
    font-size: 12px;
    color: #8c8c8c;
  }
`;

export const AreaButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0px 8px 0px;
`;

export const ButtonPrimary = styled.button`
  transition: 0.3s;
  width: 100%;
  height: 100%;

  cursor: pointer;
  border: 1px solid #cfcfd8;
  border-radius: 6px;
  background: unset;

  color: #cfcfd8;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.4px;

  padding: 12px 16px;

  &:hover {
    background: rgb(130, 87, 229);
  }
  &:disabled {
    background: rgb(130, 87, 229);
    transition: 0.3s;
  }
`;

export const ButtonSecondary = styled.button`
  transition: 0.3s;
  width: 100%;
  height: 100%;
  vertical-align: center;

  cursor: pointer;
  border: 1px solid #cfcfd8;
  border-radius: 6px;
  background: unset;

  color: #cfcfd8;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.4px;

  padding: 8px 12px;

  &:hover {
    background: rgb(130, 87, 229);
  }
`;

export const LinkPrimary = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: #cb9bde;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #cfcfd8;
  }
`;

export const LinkSecondary = styled.a`
  transition: 0.3s;
  cursor: pointer;
  color: #cb9bde;
  font-size: 12px;

  &:hover {
    color: #cfcfd8;
  }
`;

export const Divisao = styled.div`
  width: 80%;
  height: 0px;
  border-bottom: 2px solid #cb9bde;
  background: unset;
  margin: 16px 0px;
`;

export const IconGoogle = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;
