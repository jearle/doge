/*
 *
 * HabitPage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import DateBar from 'components/DateBar';
import DatePicker from 'components/DatePicker';
import DayPicker from 'components/DayPicker';
import DayItem from 'components/DayItem';
import Meditated from 'components/Meditated';

import { getDateWithDayAndOffset, getDays, } from 'utils/day';

import makeSelectHabitPage, {
  makeSelectHadMeditated,
  makeSelectDaysMeditated,
} from './selectors';

import {
  selectDay,
  addWeekOffset,
  subtractWeekOffset,
  createMeditation,
} from './actions';

const createDayItems = ({ weekOffset, selectedDay, hasMeditatedOnDate, onClick }) => getDays()
  .map((day, i) => (
    <DayItem
      key={i}
      day={day}
      didMeditateOnDay={hasMeditatedOnDate(getDateWithDayAndOffset(day, weekOffset))}
      selectedDay={selectedDay}
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
        weekOffset,
      },
      hasMeditatedOnDate,
      daysMeditated,

      dispatch,
    } = this.props;

    const dayItems = createDayItems({
      weekOffset,
      selectedDay,
      hasMeditatedOnDate,
      onClick(day) {
        dispatch(selectDay(day));
      },
    });

    const dates = getDays()
      .map((day) => getDateWithDayAndOffset(day, weekOffset));

    const daysMeditatedCount = daysMeditated(dates);

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
            total={`${daysMeditatedCount}`}
            max={'4'}
            onClick={() => dispatch(createMeditation(selectedDate))}
            didMeditate={hasMeditatedOnDate(selectedDate)}
          />
        </Content>
      </Container>
    );
  }
}

HabitPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  hasMeditatedOnDate: PropTypes.func.isRequired,
  daysMeditated: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HabitPage: makeSelectHabitPage(),
  hasMeditatedOnDate: makeSelectHadMeditated(),
  daysMeditated: makeSelectDaysMeditated(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);
