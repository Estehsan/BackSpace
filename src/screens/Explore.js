import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS, Mbg} from '../components/basic';
import {Searchbar} from 'react-native-paper';
import {
  CategorySection,
  FIlterSwitch,
  GalleryCollage,
} from '../components/ScreenComponents/ExploreComponent';

const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Mbg color={'#164852'}>
      <View style={[GlobalCSS.padding.xmd]}>
        <Searchbar
          style={[GlobalCSS.margin.ysm]}
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <FIlterSwitch />
        <CategorySection />
      </View>

      <GalleryCollage />
    </Mbg>
  );
};

export default Explore;

const styles = StyleSheet.create({});
