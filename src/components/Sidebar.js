import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <div>
      <Nav></Nav>
      <Main></Main>
    </div>
  )
}

const Nav = styled.nav`
  flex: 1;
  max-width: 150px;
`
const Main = styled.main`
  flex: 3;
  max-width: 500px;
`

export default Sidebar