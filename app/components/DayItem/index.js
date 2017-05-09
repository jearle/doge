/**
*
* DayItem
*
*/

import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  cursor: pointer;
  flex: 1;
  height: ${({ width }) => width ? width + 14 : 'auto'}px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const Day = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
  height: 100%;
  color: #3fc277;
  font-size: 1.5em;
  border: 3px solid #3fc277;
  border-radius: 100000px;
  margin-bottom: 5px;
`;

const Dot = styled.div`
  width: 6px;
  height: 9px;
  background: black;
  border-radius: 10px;
`;

class DayItem extends Component {
  constructor() {
    super();

    this.state = {
      width: null,
    };
  }

  onRef = (container) => {
    if (container === null) {
      return;
    }

    const {
      offsetWidth: width,
    } = container;

    this.setState({
      width,
    });
  }

  render() {
    const {
      day,
      onClick,
    } = this.props;

    const {
      width,
    } = this.state;

    return (
      <Container
        width={width}
        innerRef={this.onRef}
        onClick={onClick}
      >
        <Day>
          {day[0]}
        </Day>
        <Dot />
      </Container>
    );
  }
}

DayItem.propTypes = {
  day: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DayItem;
