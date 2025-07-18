// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import colors from '../theme/colors';
// import { formatCurrency } from '../utils/methods';

// const IncomeExpense = ({ income, expense }) => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.item}>
//         <Icon name="open-in-new" size={18} color={colors.greenPrimary} />
//         <Text style={styles.label}>Income</Text>
//         <Text style={[styles.amount, { color: colors.black }]}>
//           {formatCurrency(income)}
//         </Text>
//       </View>


//       <View style={styles.item}>
//         <Icon name="open-in-new" size={18} color={colors.blueAccent} />
//         <Text style={styles.label}>Expense</Text>
//         <Text style={[styles.amount, { color: colors.blueAccent }]}>
//           {formatCurrency(expense)}
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default IncomeExpense;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     marginHorizontal: 20,
//     marginTop: 16,
//     padding: 16,
//     borderRadius: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderColor: colors.black,

//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 6,
//   },
//   item: {
//     alignItems: 'center',
//     flex: 1,
//   },
//   label: {
//     marginTop: 4,
//     fontSize: 17,
//     color: colors.black,
//   },
//   amount: {
//     marginTop: 2,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   separator: {
//     width: 1,
//     height: '80%',
//     backgroundColor: colors.borderLight,
//   },
// });
