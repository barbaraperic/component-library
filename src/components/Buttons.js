import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils";

const Button = styled.button`
  border-radius: 2px;
  padding: 8px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: Roboto Mono, monospace;

  &:hover {
    background-color: ${defaultTheme.primaryColorHover};
    color: ${defaultTheme.textColorOnPrimary};
    transition: background-color 0.2s linear, 0.2s linear;
  }

  &:focus {
    outline: 3px solid ${defaultTheme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.primaryColorActive};
    border-color: ${defaultTheme.primaryColorActive};
    color: ${defaultTheme.textColorActive};
  }

`

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: 1px solid transparent;

  &:disabled {
    background-color: ${defaultTheme.disabled};
    color: ${defaultTheme.textOnDisabled};
    cursor: not-allowed;
  }
`

const SecondaryButton = styled(Button)`
  border: 1px solid ${defaultTheme.primaryColor};
  background-color: transparent;
  color: ${defaultTheme.primaryColor};

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
    border-color: ${defaultTheme.disabled};
  }
`

const TertiaryButton = styled(Button)`
  color: ${defaultTheme.primaryColor};
  border: 1px solid transparent;
  background-color: transparent;

  &:disabled {
    background: none;
    color: ${defaultTheme.disabled};
    cursor: not-allowed;
  }
`

export { PrimaryButton, SecondaryButton, TertiaryButton }

