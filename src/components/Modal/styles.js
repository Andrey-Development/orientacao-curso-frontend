import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background: #3a3a3a;
  border-radius: 8px;
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212121;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #f4f6f6;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100% - (64px + 64px));
  padding: 16px;
`;

export const IconSuccess = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  border-radius: 50%;
  font-size: 80px;
  border: solid 8px #2bbc07;
  color: #2bbc07;
`;

export const IconError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  border: solid 8px #F44E3A;
  border-radius: 50%;
  font-size: 120px;
  color: #F44E3A;
  font-weight: bold;
`;

export const IconWarning = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 120px;
  height: 120px;
  border-radius: 50%;
  font-size: 80px;
  border: solid 8px #F9F825;
  color: #F9F825;
`;

export const Description = styled.p`
  margin: 0;
  color: #cfcfd8;
`;

export const ModalFooter = styled.div`
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #212121;
`;

export const ButtonPrimary = styled.button`
  transition: 0.3s;
  width: fit-content;
  height: fit-content;

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
