import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Image, View} from 'react-native';
import {Text} from 'react-native-paper';
import {GlobalCSS} from '../components/basic';
import Entypo from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <Image
      source={require('./../assets/Backspace.png')}
      resizeMode="contain"
      style={GlobalCSS.logo}
    />
  );
};

const Tab = createBottomTabNavigator();

function BottomTabNavi() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarOptions: {
          activeTintColor: '#e91e63',
          inactiveTintColor: '#000',
          style: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            height: 60,
            paddingVertical: 10,
            paddingHorizontal: 10,
          },
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabStyle: {
            paddingVertical: 10,
            paddingHorizontal: 10,
          },
          showLabel: false,
          showIcon: true,
        },
        headerTitleAlign: 'left',
        headerTitle: () => <Header />,
        headerRight: () => <Entypo name="menu" size={40} color="white" />,
        headerStyle: {
          backgroundColor: '#000',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Explore" component={Explore} />
    </Tab.Navigator>
  );
}

export default BottomTabNavi;
