/**
*
* DayPicker
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const DayPicker = ({ children }) => (
  <Container>
    {children}
  </Container>
  );

DayPicker.propTypes = {
  children: PropTypes.node,
};

export default DayPicker;
