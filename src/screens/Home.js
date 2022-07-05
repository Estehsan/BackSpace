import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Mbg} from '../components/basic';
import HeaderHome from '../components/ScreenComponents/HomeAllComponent/HeaderHome';
import {
  GIFGallery,
  HomeImageCollage,
  HomeMediaPlayer,
  MyTop,
  TabsPost,
} from '../components/ScreenComponents/HomeAllComponent';

const Home = () => {
  return (
    <Mbg>
      <HeaderHome />
      <HomeMediaPlayer />
      <GIFGallery />
      <MyTop>MY TOP 5 [edit]</MyTop>
      <HomeImageCollage />
      <MyTop fcolor={'#000'} color={'#d9d9d9'}>
        BIO / Interest / Links
      </MyTop>
      <TabsPost />
    </Mbg>
  );
};

export default Home;

const styles = StyleSheet.create({});
