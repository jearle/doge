/**
*
* DateBar
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid #cdcdcd;
`;
const DateBar = ({ children, innerRef }) => (
  <Container innerRef={innerRef}>
    {children}
  </Container>
  );

DateBar.propTypes = {
  innerRef: PropTypes.func,
  children: PropTypes.node,
};

export default DateBar;
