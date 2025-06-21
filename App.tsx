
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import colors from './src/theme/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greenPrimary}
              />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});