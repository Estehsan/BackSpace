import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const Mbg = ({children, color}) => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color ? color : '#fff',
      }}>
      {children}
    </SafeAreaView>
  );
};

export default Mbg;

const styles = StyleSheet.create({});
