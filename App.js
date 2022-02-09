import { NativeRouter } from 'react-router-native';
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

import Main from './src/components/Main';
/*
const firebaseConfig = {
  apiKey: "AIzaSyC5P5G12AA9lCPMqde9WGsJnGKY4e2AhFs",
  authDomain: "recipe-app-7d768.firebaseapp.com",
  projectId: "recipe-app-7d768",
  storageBucket: "recipe-app-7d768.appspot.com",
  messagingSenderId: "104740209707",
  appId: "1:104740209707:web:52cf3e2b7bc3d00124166e",
  measurementId: "G-VPQ8T7B4QX"
};

const app = initializeApp(firebaseConfig);*/
//const analytics = getAnalytics(app);

const App = () => {
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  );
};

export default App;