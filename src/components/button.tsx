import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
  text: string;
  onPress: () => void;
}

export const Button = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffcc00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: 5,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});
