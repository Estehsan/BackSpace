import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

const userData = [
  {
    id: '1',
    uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
  {
    id: '2',
    uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: '3',
    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    id: '4',
    uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
  },
  {
    id: '5',
    uri: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
  },
];

const GalleryCollage = () => {
  React.useEffect(() => {
    setImagesAll(userData);
  }, []);

  const [imagesAll, setImagesAll] = React.useState([]);

  const onRemove = index => {
    const temp = [...imagesAll];
    temp.splice(index, 1);

    setImagesAll(temp);
  };

  return (
    <View>
      <FlatList
        numColumns={3}
        data={imagesAll}
        renderItem={({item, index}) => (
          <ImageBackground source={{uri: item.uri}} style={styles.image}>
            <TouchableOpacity onPress={() => onRemove(index)}>
              <Entypo name="squared-cross" size={30} color="white" />
            </TouchableOpacity>
          </ImageBackground>
        )}
      />
    </View>
  );
};

export default GalleryCollage;

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get('window').width / 3,
    width: Dimensions.get('window').width / 3,
    margin: 2,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
});
