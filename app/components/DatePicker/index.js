/**
*
* DatePicker
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Icon = styled.div`
  cursor: pointer;
  padding: 20px;
  color: #cdcdcd;
`;

const DateContainer = styled.div`

`;

const DatePicker = ({ date, onLeftClick, onRightClick }) => (
  <Container>
    <Icon
      onClick={onLeftClick}
    >
      <i
        className={'fa fa-arrow-left'}
        aria-hidden={'true'}
      >
      </i>
    </Icon>
    <DateContainer>
      {date}
    </DateContainer>
    <Icon
      onClick={onRightClick}
    >
      <i
        className={'fa fa-arrow-right'}
        aria-hidden={'true'}
      >
      </i>
    </Icon>
  </Container>
  );

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
};

export default DatePicker;
