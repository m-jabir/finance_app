
import React from 'react';
import {  Text, View } from 'react-native'

import Login from './src/components/Login.tsx';
import SignUp from './src/components/SignUp.tsx'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import colors from './src/theme/colors';

export default function App() {
  return (
    <>
    {/* <SafeAreaView style={styles.container}>
       <StatusBar
                barStyle="light-content"
                backgroundColor={colors.greenPrimary}
              />
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </SafeAreaView> */}


    <Login/>
   {/* <SignUp/> */}
 

    {/* <View style={{backgroundColor:'blue',flex:1}}>
   <Text>App</Text>s
 </View>
  */}
 </>





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
