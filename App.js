import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Categories} from "./src/app/views/Categories";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./src/app/views/HomeScreen";
import {Animals} from "./src/app/views/Animals";
import {CatsOnly} from "./src/app/views/CatsOnly";
const Stack = createNativeStackNavigator();
export const AppStateContext = React.createContext();

export default function App() {

    return (
            <AppStateProvider>
            <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
            />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Animals" component={Animals} />
            <Stack.Screen name="CatsOnly" component={CatsOnly} />

        </Stack.Navigator>
      </NavigationContainer>
</AppStateProvider>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStateProvider = props => {

    const [myValue, setValue] = React.useState();
    console.log("value from context : ", myValue);
    return (
        <AppStateContext.Provider value={[myValue, setValue]}>
            {props.children}
        </AppStateContext.Provider>
    );
};