import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  onChangeText: (text: string) => void;
}

const CloseButton = ({text, onChangeText}: Props) => {
  if (text !== '') {
    return (
      <View style={styles.inputBoxContainer}>
        <TouchableOpacity onPress={() => onChangeText('')}>
          <Image
            source={require('../assets/images/close.png')}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
};

export default CloseButton;

const styles = StyleSheet.create({
  inputBoxContainer: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    height: 25,
    width: 25,
  },
});
