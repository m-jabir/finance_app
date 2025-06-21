import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

const ProgressBar = ({ percentage, amount }) => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressFill, { width: `${percentage}%` }]}>
          <Text style={styles.percentageText}>{percentage}%</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amountText}>${amount.toFixed(2)}</Text>
        </View>
      </View>
      <Text style={styles.description}>
        {percentage}% Of Your Expenses Looks Good
      </Text>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 25,
    backgroundColor: colors.black,
    borderRadius: 15,
  },
  progressFill: {
    backgroundColor: '#002020',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    borderRadius: 15,
  },
  percentageText: {
    color: colors.white,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  amountContainer: {
    width: '70%',
    borderRadius: 100,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  amountText: {
    fontWeight: 'bold',
    textAlign: 'right'
  },
  description: {
    marginTop: 8,
    color: colors.black,
  },
});

