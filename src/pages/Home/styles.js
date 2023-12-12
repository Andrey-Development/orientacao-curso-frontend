import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;

  overflow-y: auto;
  overflow-x: hidden;

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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 48px;
`;

export const Banner = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1361/284;
  background-image: url("https://faculdadeam.edu.br/Content/images/como-ingressar/2024-1/banners/Site_Sinta_se_amf_2024.1.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 32px;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 64px;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 570px;
  height: 100%;
  max-height: 570px;
  border-radius: 3px;
  overflow: hidden;
  background: #1f2124;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardBody = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  overflow: hidden;
  background: #333;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  padding: 16px;
`;

export const CardBodyDescription = styled.div`
  width: 100%;
  color: #cfcfd8;
  font-size: 13px;
  border-radius: 3px;
  text-align: justify;
  letter-spppacing: 0.5px;
`;

export const ImgBody = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  background-image: url("https://faculdadeam.edu.br/Content/images/como-ingressar/2024-1/capas/Post_Sinta_se_amf_2024.1.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: #af69cd;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;

export const CentralizedHorizontal = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LabelLarge = styled.label`
  font-size: 18px;
  letter-spacing: 3px;
  color: #fcfcf8;
  letter-spacing: 0.1px;
  margin-bottom: 12px;
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
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 32px 0px 8px 0px;
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
