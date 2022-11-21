import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBfle0iNn9X5QhGNkebMMIrn5PTvyoHjI',
  authDomain: 'netflix-n-chill-df7ba.firebaseapp.com',
  projectId: 'netflix-n-chill-df7ba',
  storageBucket: 'netflix-n-chill-df7ba.appspot.com',
  messagingSenderId: '924178804551',
  appId: '1:924178804551:web:02bb4de3a87d81642d6662',
  measurementId: 'G-WEBLE19G51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db}