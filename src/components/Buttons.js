import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    fontSize: ${typeScale.helperText};
  `,
  large: () => `
    fontSize: ${typeScale.header5};
    padding: 16px 24px;
  `,
  warning: () => `
    background-color: ${defaultTheme.status.warningColor};
    color: ${defaultTheme.textColorInverted};
    
    &:hover, &:focus {
      background-color: ${defaultTheme.status.warningColorHover};
      outline: 2px solid ${defaultTheme.status.warningColorHover};
      outline-offset: 2px;
    }
    
    &:active {
      background-color: ${defaultTheme.status.warningColorActive};
    }
  `,
  success: () => `
    background-color: ${defaultTheme.status.successColor};
    color: ${defaultTheme.status.textColorInverted};

    &:hover, &:focus {
      background-color: ${defaultTheme.status.successColorHover};
      outline: 2px solid ${defaultTheme.status.successColorHover};
      outline-offset: 2px;
    }

    &:active {
      background-color: ${defaultTheme.status.successColorActive};
    }
  `,
  error: () => `
  background-color: ${defaultTheme.status.errorColor};
  color: ${defaultTheme.status.textColorInverted};

  &:hover, &:focus {
    background-color: ${defaultTheme.status.errorColorHover};
    outline: 2px solid ${defaultTheme.status.errorColorHover};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${defaultTheme.status.errorColorActive};
  }
`,
  warningSecondary: () => `
    background: none;
    border: 2px solid ${defaultTheme.status.warningColor};
    color: ${defaultTheme.status.warningColor};
  `,
  successSecondary: () => `
  background: none;
  border: 2px solid ${defaultTheme.status.successColor};
  color: ${defaultTheme.status.successColor};
  `,
  errorSecondary: () => `
  background: none;
  border: 2px solid ${defaultTheme.status.errorColor};
  color: ${defaultTheme.status.errorColor};
  `,
  warningTertiary: () => `
    background: none;
    color: ${defaultTheme.status.warningColor};
  `,
  successTertiary: () => `
  background: none;
  color: ${defaultTheme.status.successColor};
  `,
  errorTertiary: () => `
  background: none;
  color: ${defaultTheme.status.errorColor};
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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
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

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`

export { PrimaryButton, SecondaryButton, TertiaryButton }

