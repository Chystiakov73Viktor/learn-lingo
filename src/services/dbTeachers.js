import { get, ref } from 'firebase/database';
import { database } from './firebase';
import { Notify } from 'notiflix';

export const fetchGetTeachers = async () => {
  try {
    const teachersRef = ref(database, 'teachers');
    
    const snapshot = await get(teachersRef);
    const data = snapshot.val();

    if (data) {
      const teachersArray = Object.values(data);
      return teachersArray;
    } else {
      Notify.failure('No data available');
      return null;
    }
  } catch (error) {
    Notify.failure('Error fetching teachers');
    return null;
  }
};

export const fetchAddTeachers = async cardData => {
  const newCardRef = database.ref('teachers').push();
  await newCardRef.set(cardData);
  return newCardRef.key;
};

export const fetchDeleteTeachers = async id => {
  await database.ref('teachers').child(id).remove();
};
