import styled from 'styled-components';
import { defaultTheme, typeScale } from "../utils";

const secondaryPink = '#E56B6F';

const Button = styled.button`
  border-radius: 2px;
  padding: 8px 24px;
  font-size: ${typeScale.paragraph};
  min-width: 100px;
  cursor: pointer;
  font-family: Roboto Mono, monospace;
`

const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: white;
  border: 1px solid transparent;
`

const SecondaryButton = styled(Button)`
  border: 1px solid ${defaultTheme.primaryColor};
  background-color: transparent;
  color: ${defaultTheme.primaryColor};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    color: white;
  }
`

export { PrimaryButton, SecondaryButton }

