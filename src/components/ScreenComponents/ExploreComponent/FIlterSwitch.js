import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GlobalCSS} from '../../basic';
import {Paragraph, Switch} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
const FIlterSwitch = () => {
  const [Online, setOnline] = React.useState(false);
  const [NearBy, setNearBy] = React.useState(false);

  const onOnline = () => setOnline(!Online);
  const onNearby = () => setNearBy(!NearBy);

  return (
    <View
      style={[GlobalCSS.row, GlobalCSS.padding.xxs, GlobalCSS.justifyEvenly]}>
      <View style={[GlobalCSS.row, GlobalCSS.alignItemsCenter]}>
        <Paragraph style={{color: 'white'}}>Online Now</Paragraph>
        <Switch
          style={styles.switch}
          value={Online}
          color="silver"
          onValueChange={onOnline}
        />
      </View>
      <View style={[GlobalCSS.row, GlobalCSS.alignItemsCenter]}>
        <Paragraph style={{color: 'white'}}>Near By</Paragraph>
        <Switch
          style={styles.switch}
          value={NearBy}
          color="silver"
          onValueChange={onNearby}
        />
      </View>
      <View style={[GlobalCSS.row, GlobalCSS.alignItemsCenter]}>
        <Ionicons name="options-outline" size={32} color="white" />
      </View>
    </View>
  );
};

export default FIlterSwitch;

const styles = StyleSheet.create({
  switch: {
    marginLeft: 10,
  },
});
