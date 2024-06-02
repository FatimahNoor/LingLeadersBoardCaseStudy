import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';
import CloseButton from './closeButton';

interface Props {
  text: string;
  onChangeText: (text: string) => void;
}

export const InputBox = (props: Props) => {
  const {text, onChangeText} = props;
  return (
    <View style={styles.container}>
      <View style={styles.subContainerView}>
        <Image
          source={require('../assets/images/search-2.png')}
          style={styles.icon}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Name"
          value={text}
          onChangeText={onChangeText}
        />
        <CloseButton text={text} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subContainerView: {width: '100%', flexDirection: 'row', alignItems: 'center'},
  inputBox: {
    height: 40,
    width: '70%',
    padding: 10,
    fontSize: 16,
    marginTop: 5,
  },
  icon: {height: 35, width: 35},
});
