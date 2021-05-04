import React from 'react';
import styled from 'styled-components';
import {typeScale} from "../utils";

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.formElementBackground};
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 2px;
`

const SignUpHeader = styled.h3`
  font-size: ${typeScale.header3};
`

const SignUpText = styled.p`
  max-width: 70%;
  text-align: center;
  font-size: ${typeScale.paragraph};
`

const SignUpModal = () => {
  return (
    <ModalWrapper>
      <SignUpHeader>Sign Up</SignUpHeader>
      <SignUpText>Sign up here</SignUpText>
    </ModalWrapper>
  )
}

export default SignUpModal;