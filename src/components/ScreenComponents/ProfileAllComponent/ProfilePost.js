import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, H1, H2, RedText} from '../../basic';

const ProfilePost = ({item, Activity}) => {
  const {name, time, title, uri} = item;

  return (
    <View style={[GlobalCSS.row, GlobalCSS.padding.xsm, GlobalCSS.padding.ysm]}>
      <View>
        <Image
          source={{
            uri: uri,
          }}
          style={{
            width: 65,
            height: 65,
          }}
        />
      </View>
      <View style={[GlobalCSS.padding.xmd]}>
        <H2 fontWeight="800">
          <H2 fontWeight="800" color={'blue'}>
            {name} &nbsp;
          </H2>
          {title}
        </H2>
        <H2 fontWeight="800">
          <H2 fontSize={30} fontWeight="800" color={'red'}>
            {time}
          </H2>
          &nbsp; &nbsp;
          {Activity === true ? 'View Comments' : item.likes}
          &nbsp;
          {!Activity ? 'Likes' : ''}
        </H2>
      </View>
    </View>
  );
};

export default ProfilePost;

const styles = StyleSheet.create({});
