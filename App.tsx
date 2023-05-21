/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Navigators/StackNavigator';




function App(): JSX.Element {


 

  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}



export default App;
