import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, H1, H2, Heading, Mbg, P, RedText} from '../../basic';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabsPost = ({}) => {
  return (
    <View
      style={{
        backgroundColor: '#164854',
        paddingVertical: 5,
      }}>
      <View style={[GlobalCSS.row, GlobalCSS.justifyEvenly]}>
        <H1 color={'#fff'}>My Walls</H1>
        <H1 color={'#fff'}>My Post</H1>
        <H1 color={'#fff'}>My Album</H1>
      </View>

      {/* My Post */}
      <View
        style={[GlobalCSS.padding.xmd, GlobalCSS.padding.ysm, GlobalCSS.row]}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            }}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View>
        <View style={[GlobalCSS.padding.xmd]}>
          <H1 color={'#fff'}>
            Jessica <P>[Comment back]</P>
          </H1>
          <H2 color={'#fff'}>I love Backpsace! Great Job Mike</H2>
        </View>
      </View>

      {/* My Post */}
      <View style={[GlobalCSS.padding.xmd, GlobalCSS.row]}>
        <View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            }}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </View>
        <View style={[GlobalCSS.padding.xmd]}>
          <H1 color={'#fff'}>
            Jessica <P>[Comment back]</P>
          </H1>
          <H2 color={'#fff'}>I love Backpsace! Great Job Mike</H2>
        </View>
      </View>
    </View>
  );
};

export default TabsPost;

const styles = StyleSheet.create({});
