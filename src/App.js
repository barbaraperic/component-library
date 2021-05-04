import React, { useState } from 'react';
import {ThemeProvider}from 'styled-components'
import { GlobalStyle, darkTheme, defaultTheme } from "./utils"
// import { PrimaryButton, SecondaryButton, TertiaryButton } from './components/Buttons'
import SignUpModal from './components/Modal'

const App = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      {/* <button style={{ margin: '0 16px 24px', padding: '8px', background: 'none'}} onClick={() => setUseDarkTheme(true)}>Dark Theme</button>
      <button style={{ margin: '0 16px 24px', padding: '8px', background: 'none'}} onClick={() => setUseDarkTheme(false)}>Default Theme</button>
      <div style={{ 
        background: useDarkTheme ? defaultTheme.primaryColor : darkTheme.primaryColor,
        width: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      }}>
        <PrimaryButton modifiers={["small","error"]}>Hello World</PrimaryButton>
        <SecondaryButton modifiers={["large", "success", "successSecondary"]}>Hello World</SecondaryButton>
        <TertiaryButton modifiers={["large", "success", "successTertiary"]}>Goodby</TertiaryButton>
      </div> */}
      <SignUpModal />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App;