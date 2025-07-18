
import React from 'react';
import {  Text, View } from 'react-native'

import Login from './src/components/Login.tsx';
import SignUp from './src/components/SignUp.tsx';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator.js';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import colors from './src/theme/colors.js';
import HomeScreen from './src/screens/HomeScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnalysisScreen from './src/screens/AnalysisScreen.js';


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
      </SafeAreaView>  */}


      {/* <Login/> */}
         {/* <SignUp/> */}
 

    {/* <View style={{backgroundColor:'blue',flex:1}}>
   <Text>App</Text>s
 </View>
  */}

{/* <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer> */}
    


    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      <Stack.Screen name="Report" component={AnalysisScreen} />
      </Stack.Navigator>
    </NavigationContainer>











 </>
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});





