import React, { useContext } from 'react';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { FaExclamation } from '@react-icons/all-files/fa/FaExclamation';
import {
    ButtonPrimary,
    Description,
    IconSuccess,
    IconError,
    IconWarning,
    ModalBody,
    ModalContainer,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    ModalTitle
} from './styles';
import { UserContext } from '../../contexts/AuthContext';

const Modal = ({ type, title, text, titleBtn, onClose, }) => {
    const { setModal } = useContext(UserContext);

    switch (type) {
        case 'success':
            return (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <IconSuccess>
                                <FaCheck />
                            </IconSuccess>

                            <Description>{text}</Description>
                        </ModalBody>
                        <ModalFooter>
                            (onClose ?
                            (
                            <ButtonPrimary
                                onClick={onClose}
                            >
                                {titleBtn}
                            </ButtonPrimary>
                            ) :
                            <ButtonPrimary
                                onClick={() => setModal(false)}
                            >
                                {titleBtn}
                            </ButtonPrimary>
                            )
                        </ModalFooter>
                    </ModalContainer>
                </ModalOverlay>
            );
        case 'error':
            return (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <IconError>
                                <IoClose />
                            </IconError>

                            <Description>{text}</Description>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonPrimary onClick={onClose}>{titleBtn}</ButtonPrimary>
                        </ModalFooter>
                    </ModalContainer>
                </ModalOverlay>
            );
        case 'warning':
            return (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <IconWarning>
                                <FaExclamation />
                            </IconWarning>

                            <Description>{text}</Description>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonPrimary onClick={onClose}>{titleBtn}</ButtonPrimary>
                        </ModalFooter>
                    </ModalContainer>
                </ModalOverlay>
            );

        default:
            return (
                <ModalOverlay>
                    <ModalContainer>
                        <ModalHeader>
                            <ModalTitle>{title}</ModalTitle>
                        </ModalHeader>
                        <ModalBody>
                            <Description>{type}</Description>

                            <Description>{text}</Description>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonPrimary onClick={onClose}>{titleBtn}</ButtonPrimary>
                        </ModalFooter>
                    </ModalContainer>
                </ModalOverlay>
            );
    }
};

export default Modal;
