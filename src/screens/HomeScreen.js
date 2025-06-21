import React, { useState } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../components/Header';
import BalanceOverview from '../components/BalanceOverview';
import SavingsCard from '../components/SavingsCard';
import SegmentControl from '../components/SegmentControl';
import TransactionList from '../components/TransactionList';
import colors from '../theme/colors';
import { transactions } from '../utils/contants';
import WrapperContainer from '../components/WrapperContainer';

const HomeScreen =()=> {
  const [selectedSegment, setSelectedSegment] = useState('Monthly');

  return (
    <WrapperContainer>
      <Header userName="Hi, Welcome Back" greeting="Good Morning" />
      <BalanceOverview
        totalBalance={7783.0}
        totalExpense={-1187.4}
        goal={20000}
        percent={30}
      />
      <View style={styles.scrollContent}>
        <ScrollView contentContainerStyle={{flexGrow: 1,}} showsVerticalScrollIndicator={false}>
          <SavingsCard
            percent={30}
            revenueLastWeek={4000.0}
            expenseLastWeek={-100.0}
          />
          <SegmentControl
            options={['Daily', 'Weekly', 'Monthly']}
            selected={selectedSegment}
            onSelect={setSelectedSegment}
          />
          <TransactionList transactions={transactions} />
        </ScrollView>
      </View>
    </WrapperContainer>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 20,
    paddingBottom: 70,
  },
});
