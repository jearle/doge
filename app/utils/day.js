import moment from 'moment';

export const getDays = () => [
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

  const todaysIndex = getDays().indexOf(today);
  const newDaysIndex = getDays().indexOf(newDay);

  return newDaysIndex - todaysIndex + weekOffset;
}

export const getDateWithDayAndOffset = (day, weekOffset) => moment()
  .add(getDayDifference(day, weekOffset), 'days')
  .format('dddd, MMM Do');
