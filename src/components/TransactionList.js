import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionItem from './TransactionItem';

const TransactionList = ({ transactions = [] })=> {
  return (
    <View style={styles.container}>
      {transactions.map((data, index) => (
        <TransactionItem key={index} data={data} />
      ))}
    </View>
  );
}
export default TransactionList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
