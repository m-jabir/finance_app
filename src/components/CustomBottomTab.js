import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../theme/colors';

const CustomBottomTab = ({ state, descriptors, navigation }) => {
  const getTabBarIcon = (name, focused) => {
    let routeName = name.toLowerCase();
    let iconName = 'circle';
    if (routeName === 'home') iconName = 'home-outline';
    else if (routeName === 'analytics') iconName = 'chart-bar';
    else if (routeName === 'transfer') iconName = 'swap-horizontal';
    else if (routeName === 'layers') iconName = 'layers-outline';
    else iconName = 'account-outline';
    return <Icon name={iconName} size={28} color={colors.black} />;
  };

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            key={index}
            activeOpacity={0.95}
            onPress={onPress}
            style={styles.focusedIconContainer(isFocused)}>
            {getTabBarIcon(route.name, isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: colors.lightGreenBg,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  focusedIconContainer: (isFocused) => ({
    backgroundColor: isFocused ? colors.greenPrimary : "transparent",
    borderRadius: 30,
    padding: 1,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  }),
});
