import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CustomBottomTab from '../components/CustomBottomTab';
import AnalyticsScreen from '../screens/AnalyticsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const screenOptions = () => {
    return {
      backBehavior: 'history',
      tabBarHideOnKeyboard: true,
      headerShown: false,
      animation: 'shift',
      
    };
  };

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      initialRouteName={'Home'}
      tabBar={props => <CustomBottomTab {...props} />}
      
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Transfer" component={AnalyticsScreen} />
      <Tab.Screen name="Layers" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={AnalyticsScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
