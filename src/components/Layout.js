import React from 'react'
import styled from 'styled-components';

const Layout = () => {
  return (
    <Wrapper>
      <Nav></Nav>
      <Menu></Menu>
      <Sidebar></Sidebar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
`

const Nav = styled.nav`
  min-width: 150px;
  max-width: 250px;
`

const Sidebar = styled.sidebar`
  min-width: 150px;
  max-width: 250px;
  flex-shrink: 9999999;
  flex-basis: 250px;
`

const Menu = styled.menu`
  flex: 1;
  flex-basis: 500px;
`

export default Layout