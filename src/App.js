import React from 'react';
import { PrimaryButton, SecondaryButton } from './components/Buttons'
import { GlobalStyle } from "./utils"

const App = () => {
  return (
    <div>
      <PrimaryButton>Hello World</PrimaryButton>
      <SecondaryButton>Hello World</SecondaryButton>
      <GlobalStyle />
    </div>
  )
}

export default App;