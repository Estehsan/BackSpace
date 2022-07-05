import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HeaderProfileScreen} from '../components/ProfileScreen';
import Mbg from '../components/basic/Mbg';

const Profile = () => {
  return (
    <Mbg>
      <HeaderProfileScreen />
    </Mbg>
  );
};

export default Profile;

const styles = StyleSheet.create({});
