/**
*
* Page
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: calc(100% - 98px);
  background: white;
`;

const Page = ({ children = null }) => (
  <Container>
    {children}
  </Container>
  );

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
