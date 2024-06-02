import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const splashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Ling Case Study </Text>
    </View>
  );
};

export default splashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    backgroundColor: '#ffd480',
    padding: 30,
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    borderRadius: 20,
  },
});
