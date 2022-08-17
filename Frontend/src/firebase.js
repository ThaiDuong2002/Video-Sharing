import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA-oUmwXQffhhLwRzoJMSqoCHSLmt2Yd80',
  authDomain: 'video-354dd.firebaseapp.com',
  projectId: 'video-354dd',
  storageBucket: 'video-354dd.appspot.com',
  messagingSenderId: '403403032759',
  appId: '1:403403032759:web:496a3a242157251b96e532',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
