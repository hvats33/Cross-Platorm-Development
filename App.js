import React from 'react';
import MainContainer from './navigation/MainContainer';
import ForgotPass from './navigation/screens/forgotPass';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './navigation/screens/signUp';

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <MainContainer/>
  );
}

export default App;