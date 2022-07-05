import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GlobalCSS from '../basic/GlobalCSS';
import {H1} from '../basic';

const HeaderProfileScreen = () => {
  return (
    <View style={[GlobalCSS.padding.xmd, GlobalCSS.row]}>
      <View style={[GlobalCSS.flex]}>
        <Text>Hao</Text>
      </View>
      <View style={[GlobalCSS.flex]}>
        <H1>Hao</H1>
      </View>
    </View>
  );
};

export default HeaderProfileScreen;

const styles = StyleSheet.create({});
