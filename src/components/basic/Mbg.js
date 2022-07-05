import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';

const Mbg = ({children}) => {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: isDarkMode ? theme.colors.bg : theme.colors.lightbg,
      }}>
      {children}
    </SafeAreaView>
  );
};

export default Mbg;

const styles = StyleSheet.create({});
