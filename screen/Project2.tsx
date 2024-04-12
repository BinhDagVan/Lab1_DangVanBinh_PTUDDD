import React from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';

const Project2 = () => {
  const handlePress = () => {
    Alert.alert('Thông báo', 'Hello');
  };
  const handlePress1 = () => {
    Alert.alert('Thông báo', 'Hello Bro');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Hiển thị thông báo" onPress={handlePress} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Hiển thị thông báo" onPress={handlePress1} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    margin: 10, 
  },
});

export default Project2;
