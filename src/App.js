import React from 'react';
import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons'
import { GlobalStyle } from "./utils"

const App = () => {
  return (
    <div>
      <PrimaryButton modifiers={["small","error"]}>Hello World</PrimaryButton>
      <SecondaryButton modifiers={["large", "success", "successSecondary"]}>Hello World</SecondaryButton>
      <TertiaryButton modifiers={["large", "success", "successTertiary"]}>Goodby</TertiaryButton>
      <GlobalStyle />
    </div>
  )
}

export default App;