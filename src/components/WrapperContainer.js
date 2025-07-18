import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const WrapperContainer = ({ children, style = {} }) => {
  return (
    <SafeAreaView style={[styles.container, { ...style }]}>
      <View style={[styles.container, { ...style }]}>{children}</View>
    </SafeAreaView>
  );
};

export default WrapperContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greenPrimary,
    

  },
});
