import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import ProgressBar from './progressBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatCurrency } from '../utils/methods';

const BalanceOverview = ({ totalBalance, totalExpense}) => {

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.col}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="open-in-new" size={16} color="#000" />
            <Text style={styles.label}>Total Balance</Text>
          </View>
          <Text style={styles.balance}>{formatCurrency(totalBalance)}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.col}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="open-in-new" size={16} color="#000" />
            <Text style={styles.label}>Total Expense</Text>
          </View>
          <Text style={[styles.balance, styles.expense]}>
            {formatCurrency(totalExpense)}
          </Text>
        </View>
      </View>
      <ProgressBar percentage={30} amount={20000} />
    </View>
  );
}

export default BalanceOverview;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 40,
    borderRadius: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  col: {
    // flex: 1,
    // alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: colors.black,
    marginBottom: 4,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  expense: {
    color: colors.blueAccent,
  },
  divider: {
    width: '0.5%',
    backgroundColor: colors.borderLight,
    marginHorizontal: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  progressBarBackground: {
    flex: 1,
    height: 12,
    backgroundColor: colors.white,
    borderRadius: 6,
    overflow: 'hidden',
    marginRight: 10,
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: colors.greenPrimary,
  },
  goalText: {
    fontSize: 12,
    color: colors.black,
  },
});
