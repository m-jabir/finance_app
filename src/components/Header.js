
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FONTS } from '../theme/fonts';

const Header= ({ userName, greeting })=> {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{userName}</Text>
        <Text style={styles.subtitle}>{greeting}</Text>
      </View>
      <TouchableOpacity style={styles.iconWrapper} onPress={() => { }}>
        <Icon name="bell-outline" size={22} color={colors.black} />
      </TouchableOpacity>
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greenPrimary,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontFamily: FONTS.bold
  },
  subtitle: {
    color: colors.black,
    fontSize: 14,
    marginTop: 4,
    fontFamily: FONTS.light
  },
  iconWrapper: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 20,
  },
});
