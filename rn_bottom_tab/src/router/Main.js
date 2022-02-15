import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/login/Login.js';
import Authenticated from '../container/Authenticated';
import Splash from '../screens/splash/Splash';

const Stack = createStackNavigator();
function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Authenticated"
          component={Authenticated}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Main;
