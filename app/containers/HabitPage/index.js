/*
 *
 * HabitPage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import moment from 'moment';

import DateBar from 'components/DateBar';
import DatePicker from 'components/DatePicker';
import DayPicker from 'components/DayPicker';
import DayItem from 'components/DayItem';
import Meditated from 'components/Meditated';

import makeSelectHabitPage from './selectors';

import {
  selectDay,
  addWeekOffset,
  subtractWeekOffset,
} from './actions';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const createDayItems = ({ selectedDay, selectedDate, onClick }) => days
  .map((day, i) => (
    <DayItem
      key={i}
      day={day}
      selectedDay={selectedDay}
      selectedDate={selectedDate}
      onClick={() => onClick(day)}
    />
  ));

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
`;

export class HabitPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      HabitPage: {
        selectedDay,
        selectedDate,
      },

      dispatch,
    } = this.props;

    const dayItems = createDayItems({
      selectedDay,
      selectedDate,
      onClick(day) {
        dispatch(selectDay(day));
      },
    });

    return (
      <Container>
        <DateBar>
          <DatePicker
            date={selectedDate}
            onLeftClick={() => dispatch(subtractWeekOffset())}
            onRightClick={() => dispatch(addWeekOffset())}
          />
          <DayPicker>
            {dayItems}
          </DayPicker>
        </DateBar>
        <Content>
          <Meditated
            total={'1'}
            max={'4'}
            onClick={() => console.log('meditate')}
            didMeditate={true}
          />
        </Content>
      </Container>
    );
  }
}

HabitPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HabitPage: makeSelectHabitPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);
