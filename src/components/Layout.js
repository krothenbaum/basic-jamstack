import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Container, Column, Row } from 'react-rasta';
import styled, { ThemeProvider } from 'styled-components';

import Header from './Header';
import './layout.css';
import theme from '../styles/theme';

const StyledContainer = styled(Container)`
  background-color: ${theme.colors.blueGreen};
  height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <ThemeProvider theme={theme}>
          <StyledContainer fluid={true}>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            />
            <Row>
              <Column>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Column>
            </Row>
            {children}
          </StyledContainer>
        </ThemeProvider>
      )}
    />
  );
};

export default Layout;
