/**
 * Created by jonas on 14.03.17.
 */
import React from 'react';
import {Text, Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Overview({theme, openAnyline, checkCameraPermissionAndOpen, disabled}) {

  const platformPermissionCheck = (Platform.OS === 'android') ? checkCameraPermissionAndOpen : openAnyline;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{alignItems: 'center', justifyContent: 'center'}}
      disabled={disabled}
      onPress={() => {
        platformPermissionCheck('SERIAL_NUMBER')
      }}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <View style={{height: 50, width: 50, justifyContent: 'center', alignItems: 'center'}}>
          <Icon name={'camera'} size={25} color={"#fff"}/>
        </View>
        <View>
          <Text style={{fontSize: 23, color: '#fff', fontFamily: theme.bold}}>បញ្ចូលទឹកប្រាក់</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   // backgroundColor: '#303030',
  //   marginTop: '40%',
  //   marginBottom: '20%'
  // },
  buttons: {
    margin: 5
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 25
  }
});
