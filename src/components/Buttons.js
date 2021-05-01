import styled from 'styled-components';

const primaryBlue = '#300086';

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
  border: none;
  color: white;

`

export default PrimaryButton

