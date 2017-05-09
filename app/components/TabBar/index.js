/**
*
* TabBar
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 98px;
  display: flex;
`;

const TabBar = ({ children = null }) => (
  <Container>
    {children}
  </Container>
);

TabBar.propTypes = {
  children: PropTypes.node,
};

export default TabBar;
