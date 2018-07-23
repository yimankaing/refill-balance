import React from 'react';
import {TextField} from 'react-native-material-textfield';
import {Dropdown} from 'react-native-material-dropdown';
import Icon from 'react-native-vector-icons/Feather'
import {Button, TouchableOpacity, NativeModules, StyleSheet, Text, View} from 'react-native';
import call from 'react-native-phone-call';

let cardTypes = [
  {
    label: 'Smart',
    value: '*888*',
  },
  {
    label: 'Cellcard',
    value: '*123*',
  },
  {
    label: 'Metfone',
    value: '*197*',
  }
];
export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: cardTypes[0].value
    }
  }

// export default function Result({
//                                  result,
//                                  imagePath,
//                                  fullImagePath,
//                                  emptyResult,
//                                  currentScanMode,
//                                }) {
  // let fullImage = (<View/>);
  // let fullImageText = (<View/>);
  // if (fullImagePath && fullImagePath != '') {
  //   fullImage = (
  //       <Image
  //           style={styles.image}
  //           resizeMode={'contain'}
  //           source={{uri: `file://${fullImagePath}`}}
  //       />);
  //   fullImageText = (
  //       <Text style={styles.text}>Full Image:</Text>
  //   );
  // }
  refill = () => {
    const prefix = this.state.cardType;
    const digit = this.props.result.reading;
    const suffix = "%23";
    const args = {
      number: prefix + digit + suffix,
      prompt: false
    };
    // console.log(NativeModules)
    // NativeModules.CallManager.call();
    // console.log(args.number)
    call(args).catch(console.error)
  };

  render() {
    const {
      result,
      imagePath,
      fullImagePath,
      emptyResult,
      currentScanMode,
      theme
    } = this.props;
    return (
      <View style={{flex: 1, padding: 20}}>
        <View style={{height: 70}}>
          <Dropdown
            fontSize={23}
            // baseColor={"#fff"}
            // textColor={"#fff"}
            // itemColor={"gray"}
            // selectedItemColor={"#000"}
            label='ប្រភេទ'
            data={cardTypes}
            value={this.state.cardType}
            onChangeText={(cardType) => this.setState({cardType})}
          />
        </View>
        <View>
          <Text
            style={{
              color: 'gray',
              fontSize: 20, fontFamily: theme.normal, paddingTop: 15, paddingBottom: 10
            }}
          >{result.reading ? `លេខកូដកាត [${result.reading.length} ខ្ទង់]` : ''}</Text>
        </View>
        <View style={{
          borderRadius: 10,
          height: 66,
          alignItems: 'center', justifyContent: 'center',
          backgroundColor: result.reading ? 'rgba(33, 150, 243, 0.4)' : 'transparent'
        }}>
          <Text style={{
            fontFamily: 'Roboto-Bold',
            fontSize: 35,
            color: "#000"
          }}>{result.reading}</Text>
        </View>
        <View
          style={{flex: 1, margin: 0, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
          <TouchableOpacity
            disabled={!result.reading}
            activeOpacity={0.6}
            onPress={this.refill}
            style={{
              position: 'absolute',
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              elevation: 5,
              backgroundColor: result.reading ? theme.color : "#acacac",
              height: 70, width: 70
            }}>
            <Icon name={"share"} color={"#fff"} size={25}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    // backgroundColor: '#303030',
    marginBottom: 50,
    marginTop: 50
  },
  text: {
    color: "white",
    justifyContent: 'space-around',
    marginTop: 5
  },
  scrollContainer: {
    alignItems: 'center',
  },

  backButton: {
    marginTop: 25,
    width: '100%'
  }
});
