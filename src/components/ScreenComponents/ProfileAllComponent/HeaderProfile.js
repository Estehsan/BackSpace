import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import GlobalCSS from '../../basic/GlobalCSS';
import {H1, RedText} from '../../basic';
import Btn from '../../basic/Btn';

const HeaderProfile = () => {
  return (
    <View style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ymd, GlobalCSS.row]}>
      <View
        style={[
          GlobalCSS.flex,
          GlobalCSS.alignContentCenter,
          GlobalCSS.alignItemsCenter,
        ]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          }}
          style={{
            width: 90,
            height: 90,
          }}
        />
        <H1>Hello Mike</H1>
      </View>
      <View style={[GlobalCSS.flex]}>
        <H1>
          Friends:
          <RedText>25,423</RedText>
        </H1>
        <H1>
          Profile:
          <RedText>5,423</RedText>
        </H1>
        <H1>
          Likes:
          <RedText>23,423</RedText>
        </H1>
        <Btn>Invite Friends</Btn>
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({});
