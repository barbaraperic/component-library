import styled from 'styled-components';
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "../utils";


export const BUTTON_MODIFIERS = {
  small: () => `
    fontSize: ${typeScale.helperText};
  `,
  large: () => `
    fontSize: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: ({ props }) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${props.theme.status.warningColorHover};
    }

    &:focus {
      outline: 2px solid ${props.theme.status.warningColorHover};
      outline-offset: 2px;
    }
    
    &:active {
      background-color: ${props.theme.status.warningColorActive};
    }
  `,
  success: ({ props }) => `
    background-color: ${props.theme.status.successColor};
    color: ${props.theme.textColorInverted};

    &:hover, &:focus {
      background-color: ${props.theme.status.successColorHover};
    }
    &:focus {
      outline: 2px solid ${props.theme.status.successColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${props.theme.status.successColorActive};
    }
  `,
  error: ({ props }) => `
    background-color: ${props.theme.status.errorColor};
    color: ${props.theme.textColorInverted};

  &:hover, &:focus {
    background-color: ${props.theme.status.errorColorHover};
  }
  &:focus {
    outline: 2px solid ${props.theme.status.errorColorHover};
    outline-offset: 2px;
  }
  &:active {
    background-color: ${props.theme.status.errorColorActive};
  }
`,
  warningSecondary: ({ props }) => `
    background: none;
    border: 2px solid ${props.theme.status.warningColor};
    color: ${props.theme.status.warningColor};
  `,
  successSecondary: ({ props }) => `
  background: none;
  border: 2px solid ${props.theme.status.successColor};
  color: ${props.theme.status.successColor};
  `,
  errorSecondary: ({ props }) => `
  background: none;
  border: 2px solid ${props.theme.status.errorColor};
  color: ${props.theme.status.errorColor};
  `,
  warningTertiary: ({ props }) => `
    background: none;
    color: ${props.theme.status.warningColor};
  `,
  successTertiary: ({ props }) => `
  background: none;
  color: ${props.theme.status.successColor};
  `,
  errorTertiary: ({ props }) => `
  background: none;
  color: ${props.theme.status.errorColor};
  `
}

const Button = styled.button`
  border-radius: 2px;
  padding: 8px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: Roboto Mono, monospace;

  &:hover {
    background-color: ${props => props.theme.primaryColorHover};
    color: ${props => props.theme.textColorOnPrimary};
    transition: background-color 0.2s linear, 0.2s linear;
  }

  &:focus {
    outline: 3px solid ${props => props.theme.primaryColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryColorActive};
    border-color: ${props => props.theme.primaryColorActive};
    color: ${props => props.theme.textColorActive};
  }

`

const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: white;
  border: 1px solid transparent;

  &:disabled {
    background-color: ${props => props.theme.disabled};
    color: ${props => props.theme.textOnDisabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const SecondaryButton = styled(Button)`
  border: 1px solid ${props => props.theme.primaryColor};
  background-color: transparent;
  color: ${props => props.theme.primaryColor};

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
    border-color: ${props => props.theme.disabled};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

const TertiaryButton = styled(Button)`
  color: ${props => props.theme.primaryColor};
  border: 1px solid transparent;
  background-color: transparent;

  &:disabled {
    background: none;
    color: ${props => props.theme.disabled};
    cursor: not-allowed;
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export { PrimaryButton, SecondaryButton, TertiaryButton }

