import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, H1, H2, Heading, Mbg, RedText} from '../../basic';
import {theme} from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const GreyHeading = ({children, color, fcolor}) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.grey,
        paddingVertical: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 5,
      }}>
      <FontAwesome name="arrows" size={25} color={theme.colors.MenuGrey} />
      <H1>{children}</H1>
      <View style={styles.border}>
        <AntDesign name="down" size={25} color={theme.colors.primary} />
      </View>
    </View>
  );
};

export default GreyHeading;

const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    padding: 2,
    borderColor: '#000',
  },
});
