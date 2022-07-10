import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Paragraph} from 'react-native-paper';
import {GlobalCSS} from '../../basic';

const CategorySection = () => {
  return (
    <View style={[GlobalCSS.row, GlobalCSS.justifyEvenly]}>
      <Paragraph
        style={{
          color: 'white',

          textDecorationLine: 'underline',
        }}>
        members
      </Paragraph>
      <Paragraph style={{color: 'white'}}>friends</Paragraph>
      <Paragraph style={{color: 'white'}}>favs</Paragraph>
      <Paragraph style={{color: 'white'}}>backspaced</Paragraph>
    </View>
  );
};

export default CategorySection;

const styles = StyleSheet.create({});
