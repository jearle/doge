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

import { getDateWithDayAndOffset, getDays } from 'utils/day';

import makeSelectHabitPage, {
  makeSelectHadMeditated,
} from './selectors';

import {
  selectDay,
  addWeekOffset,
  subtractWeekOffset,
  createMeditation,
  removeMeditation,
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
        daysMeditated,
        meditationId,
      },
      hasMeditatedOnDate,

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
            total={`${daysMeditated}`}
            max={'4'}
            onClick={() => hasMeditatedOnDate(selectedDate) ?
              dispatch(removeMeditation(meditationId)) :
              dispatch(createMeditation(selectedDate))
            }
            didMeditate={hasMeditatedOnDate(selectedDate)}
          />
        </Content>
      </Container>
    );
  }
}

HabitPage.propTypes = {
  HabitPage: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  hasMeditatedOnDate: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  HabitPage: makeSelectHabitPage(),
  hasMeditatedOnDate: makeSelectHadMeditated(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HabitPage);
