import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function BottomTabNavi() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default BottomTabNavi;
