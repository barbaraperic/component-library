import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons'
import { GlobalStyle } from "./utils"

const App = () => {
  return (
    <div>
      <PrimaryButton disabled>Hello World</PrimaryButton>
      <SecondaryButton disabled>Hello World</SecondaryButton>
      <TertiaryButton disabled>Goodby</TertiaryButton>
      <GlobalStyle />
    </div>
  )
}

export default App;