import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons'
import { GlobalStyle } from "./utils"

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers={["small","warning"]}>Hello World</PrimaryButton>
      <SecondaryButton modifiers={["large", "warning", "warningSecondary"]}>Hello World</SecondaryButton>
      <TertiaryButton modifiers="large">Goodby</TertiaryButton>
      <GlobalStyle />
    </div>
  )
}

export default App;