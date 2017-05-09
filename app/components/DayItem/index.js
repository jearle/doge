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
  color: ${({ didMeditateOnDay }) => didMeditateOnDay ? `#3fc277` : `#cdcdcd` };
  font-size: 1.5em;
  border: 3px solid ${({ didMeditateOnDay }) => didMeditateOnDay ? `#3fc277` : `#cdcdcd` };
  border-radius: 100000px;
  margin-bottom: 5px;
`;

const Dot = styled.div`
  width: 6px;
  height: 9px;
  background: black;
  border-radius: 10px;
  transition: opacity .5s;
  opacity: ${({ isSelected }) => isSelected ? 1 : 0};
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
      selectedDay,
      didMeditateOnDay,
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
        <Day
          didMeditateOnDay={didMeditateOnDay}
        >
          {day[0]}
        </Day>
        <Dot
          isSelected={selectedDay === day}
        />
      </Container>
    );
  }
}

DayItem.propTypes = {
  day: PropTypes.string.isRequired,
  selectedDay: PropTypes.string.isRequired,
  didMeditateOnDay: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default DayItem;
