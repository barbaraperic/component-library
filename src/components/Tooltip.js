import React, { useState } from "react";
import styled from "styled-components";

export const Tooltip = ({ content, children, position }) => {
  const [active, setActive] = useState(false);
  return (
    <Wrapper
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {children}
      {active && <TooltipWrapper>{content}</TooltipWrapper>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* cursor: pointer; */
  display: inline-block;
  position: relative;
`;

const TooltipWrapper = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px;
  font-size: 14px;
  font-family: sans-serif;
  line-height: 1;
  z-index: 100;
  white-space: nowrap;
  /* border: 1px solid ${COLORS.secondary}; */
  /* color: ${COLORS.secondary}; */
  bottom: calc(35px * -1);

  &::before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
    /* border-bottom-color: ${COLORS.secondary}; */
    bottom: 100%;
  }
`;
