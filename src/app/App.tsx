import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Application } from "./ui";

export function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Application />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
