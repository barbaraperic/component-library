import styled from 'styled-components';

const primaryBlue = '#300086';
const secondaryPink = '#E56B6F';

const Button = styled.button`
  border-radius: 2px;
  padding: 8px 24px;
  font-size: 1rem;
  min-width: 100px;
  cursor: pointer;
  font-family: Roboto Mono, monospace;

`

const PrimaryButton = styled(Button)`
  background-color: ${primaryBlue};
  color: white;
  border: 1px solid transparent;
`

const SecondaryButton = styled(Button)`
  background-color: ${secondaryPink};
  border: 1px solid transparent;
  color: white;
`

const TertiaryButton = styled(Button)`
  border: 1px solid ${primaryBlue};
  background-color: transparent;
  color: ${primaryBlue};

  &:hover {
    background-color: ${primaryBlue};
    color: white;
  }
`

export { PrimaryButton, SecondaryButton, TertiaryButton }

