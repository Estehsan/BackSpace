import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GreyHeading,
  HeaderProfile,
  ProfilePost,
} from '../components/ScreenComponents/ProfileAllComponent';
import Mbg from '../components/basic/Mbg';
import {MyTop} from '../components/ScreenComponents/HomeAllComponent';
import {ScrollView} from 'react-native-gesture-handler';

const data2 = [
  {
    id: 1,
    name: 'Shah',
    title: 'commented on your wall',
    uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    likes: '30',
    comments: '10',
    time: '2 mins ago',
  },
];
const data = [
  {
    id: 1,
    name: 'John',
    uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: "John's Wall is great",
    likes: '10',
    comments: '10',
    time: '2 mins ago',
  },

  {
    id: 2,
    name: 'Shani',
    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',

    title: "What's Going on",
    likes: '12',
    comments: '1',
    time: '10 mins ago',
  },
];

const Profile = () => {
  return (
    <ScrollView>
      <Mbg>
        <HeaderProfile />
        <MyTop>Posts from Backspace founder</MyTop>
        <GreyHeading>Activity</GreyHeading>
        <FlatList
          data={data2}
          renderItem={({item}) => <ProfilePost Activity={true} item={item} />}
        />
        <GreyHeading>Friend's Post</GreyHeading>
        <FlatList
          data={data}
          renderItem={({item}) => <ProfilePost item={item} />}
        />
        <GreyHeading>Your Post</GreyHeading>
        <FlatList
          data={data}
          renderItem={({item}) => <ProfilePost item={item} />}
        />
      </Mbg>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
