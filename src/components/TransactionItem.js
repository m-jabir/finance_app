import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { formatCurrency } from '../utils/methods';
import { iconProps } from '../utils/contants';

const TransactionItem=({data = {}})=> {

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.iconContainer}>
          <Icon name={iconProps[data.title]} size={22} color={colors.white} />
        </View>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.time}>{`${data.time} - ${data.date}`}</Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.middle}>
        <Text style={styles.category}>{data.category}</Text>
      </View>
      <View style={{ ...styles.divider, marginRight: 1 }} />
      <View style={styles.right}>
        <Text style={[styles.amount(data.amount < 0)]}>
          {formatCurrency(data.amount)}
        </Text>
      </View>
    </View>
  );
}
export default TransactionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    marginHorizontal: 20,
    marginBottom: 12,
  },
  divider: {
    width: 1,
    backgroundColor: colors.greenPrimary,
    height: '77%',
    marginTop: 5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: '#ADD8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.black,
  },
  time: {
    fontSize: 12,
    color: colors.blueAccent,
    marginTop: 2,
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  category: {
    fontSize: 14,
    color: colors.grayText,
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  amount: (isExpense) => ({
    fontSize: 16,
    fontWeight: '500',
    color: isExpense ? colors.blueAccent : colors.black,
  }),

});
