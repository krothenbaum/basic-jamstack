import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import { rgba } from 'polished';

const StyledHeader = styled.div`
  background-color: ${prop('theme.colors.textGrey', 'rebeccapurple')};
  padding: 1.45rem 1.0875rem;
  margin-bottom: 1.45rem;
  margin-left: -15px;
  margin-right: -15px;
  border-bottom: 4px solid ${prop('theme.colors.blueGreen')};
`;

const StyledH1 = styled.h1`
  margin: 0;
  color: white;
  text-decoration: none;
  transition: all 200ms ease-out;

  &:hover {
    color: ${prop('theme.colors.textLight')};
    transition: all 200ms ease-in;
    text-shadow: 4px 4px 4px ${rgba('#323247', 0.2)};
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContainer>
      <StyledH1>{siteTitle}</StyledH1>
    </HeaderContainer>
  </StyledHeader>
);

export default Header;
