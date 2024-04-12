import React from "react";
import { Button, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Project1 from "./screen/Project1";
import Project2 from "./screen/Project2";
import Project3 from "./screen/Project3";
import Project4 from "./screen/Project4";
import Project5 from "./screen/Project5";
import Project6 from "./screen/Project6";
import Project7 from "./screen/Project7";
import Project8 from "./screen/Project8";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Project1" component={Project1} />
        <Stack.Screen name="Project2" component={Project2} />
        <Stack.Screen name="Project3" component={Project3} />
        <Stack.Screen name="Project4" component={Project4} />
        <Stack.Screen name="Project5" component={Project5} />
        <Stack.Screen name="Project6" component={Project6} />
        <Stack.Screen name="Project7" component={Project7} />
        <Stack.Screen name="Project8" component={Project8} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "space-around", alignItems: "center" }}>
      <Button title="Project 1" onPress={() => navigation.navigate('Project1')} />
      <Button title="Project 2" onPress={() => navigation.navigate('Project2')} />
      <Button title="Project 3" onPress={() => navigation.navigate('Project3')} />
      <Button title="Project 4" onPress={() => navigation.navigate('Project4')} />
      <Button title="Project 5" onPress={() => navigation.navigate('Project5')} />
      <Button title="Project 6" onPress={() => navigation.navigate('Project6')} />
      <Button title="Project 7" onPress={() => navigation.navigate('Project7')} />
      <Button title="Project 8" onPress={() => navigation.navigate('Project8')} />
    </SafeAreaView>
  );
};

export default App;