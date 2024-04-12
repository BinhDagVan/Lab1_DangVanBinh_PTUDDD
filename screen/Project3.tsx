import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.button, props.buttonStyle]}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const Project3 = () => {
  return (
    <View style={styles.container}>
      <CustomButton text="Say hello" onPress={() => alert('Hello')} />
      <CustomButton
        text="Say goodbye"
        onPress={() => alert('Goodbye!')}
        buttonStyle={{ backgroundColor: '#4dc2c2' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#ff637c',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  },
});

export default Project3;
