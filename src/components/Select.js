import React from 'react';
import styled from 'styled-components';

// import { COLORS } from '../../constants';
// import Icon from '../Icon';
// import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  // const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper value={value} onChange={onChange}>
      {children}
    </SelectWrapper>
  );

};
  
  const SelectWrapper = styled.select`
    border-radius: 8px;
    padding: 12px 16px;
    /* background-color: ${COLORS.transparentGray15}; */
    /* color: ${COLORS.gray700}; */

    &:hover {
      color: black;
    }

    &:focus {
      /* border: 1px solid ${COLORS.primary}; */
    }
  `

export default Select;
