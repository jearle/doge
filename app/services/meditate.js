import firebase, { getTimestamp } from './firebase';

const MEDITATION_PATH = `/meditations`;
const USER_ID = `1`;

const MEDITATION_REF = firebase
  .database()
  .ref(`${MEDITATION_PATH}/${USER_ID}`);

const meditationsMapToArray = (meditationsMap) => {
  if (!meditationsMap) {
    return [];
  }
  return Object
    .keys(meditationsMap)
    .map((id) => ({
      ...meditationsMap[id],
      id,
    }));
};

export function* createMeditation({ date }) {
  return yield MEDITATION_REF
    .push({
      date,
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
}

export function* loadMeditations() {
  return yield MEDITATION_REF
    .once('value')
    .then((res) => res.val())
    .then(meditationsMapToArray);
}
