import firebase, { getTimestamp } from './firebase';

const MEDITATION_PATH = `/meditations`;
const USER_ID = `1`;

const MEDITATION_REF = firebase
  .database()
  .ref(`${MEDITATION_PATH}/${USER_ID}`);

export function* createMeditation() {
  return yield MEDITATION_REF
    .push({
      createdAt: getTimestamp(),
      updatedAt: getTimestamp(),
    });
}
