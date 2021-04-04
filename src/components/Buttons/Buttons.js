import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZE = {
  small: {
    "--border-radius": 2 + "px",
    "--font-size": 16 + "px",
    "--padding": "8px 16px"
  },
  medium: {
    "--border-radius": 2 + "px",
    "--font-size": 18 + "px",
    "--padding": "16px 24px"
  },
  large: {
    "--border-radius": 4 + "px",
    "--font-size": 21 + "px",
    "--padding": "20px 36px"
  }
}


const Button = ({ variant, size, children }) => {
  const styles = SIZE[size]
  let Component;
  if (variant === "fill") {
    Component = FillButton
  } else if (variant === "outline") {
    Component = OutlineButton
  } else {
    Component = GhostButton
  }
  
  return (
    <Component style={styles}> 
      {children}
    </Component>
  );
};

const ButtonBase = styled.button`
  font-size: var(--font-size);
  padding: 16px 24px;
  border-radius: 2px;
  border: none;
  border: 2px solid transparent;
  font-family: "Roboto";
  text-transform: uppercase;
  cursor: pointer;

  &:focus { 
    outline-color: currentColor;
    outline-offset: 4px;
  }
`

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight}
  }
`

const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite}
  }
`

const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  outline-color: ${COLORS.gray};
  border-radius: 8px;
  background-color: transparent;

  &:hover {
    background-color: ${COLORS.transparentGray15};
    border: 2px solid transparent;
    color: ${COLORS.black};
  }
`

export default Button;
