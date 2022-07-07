import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

function BottomTabNavi() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      {/* <Tab.Screen name="Profile" component={Profile} /> */}
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
}

export default BottomTabNavi;
