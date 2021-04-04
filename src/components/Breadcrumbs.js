import React from 'react';
import { styled } from 'styled-components';

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;
const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 12px;
  &:not(:first-of-type) {
    margin-left: var(--spacing);
    &:before {
      content: '/';
      opacity: 0.25;
      margin-right: var(--spacing);
      /* Note: The ideal version of this solution
       * would instead use a transformed border,
       * to avoid using a real character:
       *
       *   content: '';
       *   transform: rotate(15deg)
       *   border-right: 1px solid
       *   height: 0.8em;
       */
    }
  }
`;

const CrumbLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: revert;
  }
`;


const Breadcrumbs = ({ children }) => {
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbList>{children}</BreadcrumbList>
    </nav>
  );
};
const Crumb = ({ href, children }) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>{children}</CrumbLink>
    </CrumbWrapper>
  );
};


const BreadcrumbComponent = () => {
  return (
    <Breadcrumbs>
      <Crumb href="/">Home</Crumb>
      <Crumb href="/living">Living Room</Crumb>
      <Crumb href="/living/couch">Couches</Crumb>
      <Crumb href="/living/couch/sectional">Sectionals</Crumb>
    </Breadcrumbs>
  );
}

export default BreadcrumbComponent
