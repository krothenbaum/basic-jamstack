import React from 'react';
import { graphql } from 'gatsby';
import { Row } from 'react-rasta';
import Layout from '../components/Layout';
import Card from '../components/Card';

const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const randomImgs = Array.from({length: 3}, () => {
    // return  `https://unsplash.it/200?random?sig=${Math.floor(Math.random() * 100)}`;
    return Math.floor(Math.random() * 100)
  });

  return (
    <Layout>
      <Row justifyContent="center" alignContent="center" direction="column">
        {edges.map((item, index) => {
          const { html, frontmatter } = item.node;
          const { title, imgSrc } = frontmatter;
          const randomSrc = `${imgSrc}?=sig${randomImgs[index]}`;
          return (
            <Card title={title} imgSrc={randomSrc} html={html} key={index} />
          );
        })}
      </Row>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            imgSrc
          }
          html
        }
      }
    }
  }
`;

export default IndexPage;
