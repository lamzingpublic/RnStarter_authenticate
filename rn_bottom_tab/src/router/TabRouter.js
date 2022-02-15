import React from 'react';

import Icon from '../constants/MIcons';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Profile from '../screens/profile/Profile';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
function HomeFlow() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <HomeStack.Screen name="HomeScreen" component={Home} />
      

    </HomeStack.Navigator>
  );
}



function ProfileFlow() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: true}}>

      <ProfileStack.Screen name="ProfileScreen" component={Profile} />
     
    </ProfileStack.Navigator>
  );
}
function TabNavigator(props) {
 

  React.useEffect(() => {
   
    
  });

  return (
    <Tab.Navigator
    screenOptions={{
        //activeTintColor: '#fff',
        headerShown: false,
        tabBarInactiveTintColor: '#C6CDD7',
        tabBarActiveTintColor: '#e40000',
        
      }}>
      <Tab.Screen name="Home" component={HomeFlow}
          options={{
            tabBarIcon: props => (
              <Icon.MaterialCommunityIcons name="home" size={props.size} color={props.color} />
            ),
          }}
    />
    
      <Tab.Screen
        name="Profile"
        
        component={ProfileFlow}
        options={{
          tabBarIcon: props => (
            <Icon.MaterialCommunityIcons
              name="account-details"
              size={props.size}
              color={props.color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
