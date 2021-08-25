import React from 'react';
import styled from 'styled-components';
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
      </PresentationalBit>
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const NativeSelect = styled.select`

`

const PresentationalBit = styled.div`

`

export default Select;