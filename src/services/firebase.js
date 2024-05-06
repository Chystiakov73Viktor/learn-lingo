import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBzEpGiN4yVgPzb2Ap151gDghMIPHLetZU',
  authDomain: 'language-workshop-online.firebaseapp.com',
  projectId: 'language-workshop-online',
  storageBucket: 'language-workshop-online.appspot.com',
  messagingSenderId: '1055351932273',
  appId: '1:1055351932273:web:eb74ccd358df76ac7a22d0',
  databaseURL:
    'https://language-workshop-online-default-rtdb.europe-west1.firebasedatabase.app',
};

export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
