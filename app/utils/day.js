import moment from 'moment';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getDayDifference = (newDay, weekOffset) => {
  const today = moment().format('dddd');

  const todaysIndex = days.indexOf(today);
  const newDaysIndex = days.indexOf(newDay);

  return newDaysIndex - todaysIndex + weekOffset;
}

export const getDateWithDayAndOffset = (day, weekOffset) => moment()
  .add(getDayDifference(day, weekOffset), 'days')
  .format('dddd, MMM Do');
