import {StyleSheet, Text, View, useColorScheme} from 'react-native';
import React from 'react';
import {theme} from './../theme';

const P = ({children, navigation, color, Align, font, size}) => {
  return (
    <Text
      style={{
        textAlign: Align ? Align : 'left',
        fontSize: size ? size : 14,
        color: color ? color : theme.colors.black,
      }}>
      {children}
    </Text>
  );
};

export default P;

const styles = StyleSheet.create({});
