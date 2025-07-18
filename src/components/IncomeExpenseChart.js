// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import { BarChart, Grid, XAxis } from 'react-native-svg-charts';
// import * as scale from 'd3-scale';
// import { Ionicons } from '@expo/vector-icons'; // or 'react-native-vector-icons/Ionicons'
// import colors from '../theme/colors'; // adjust this to match your color file

// const tabs = ['Daily', 'Weekly', 'Monthly', 'Year'];

// const IncomeExpenseChart = () => {
//   const [selectedTab, setSelectedTab] = useState('Daily');

//   const incomeData = [5, 10, 8, 15, 6, 2, 9];
//   const expenseData = [3, 5, 6, 9, 2, 1, 5];
//   const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

//   const barData = [
//     {
//       data: incomeData,
//       svg: { fill: colors.green },
//     },
//     {
//       data: expenseData,
//       svg: { fill: colors.blueAccent },
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabRow}>
//         {tabs.map((tab) => (
//           <TouchableOpacity
//             key={tab}
//             style={[
//               styles.tab,
//               selectedTab === tab && styles.activeTab,
//             ]}
//             onPress={() => setSelectedTab(tab)}
//           >
//             <Text
//               style={[
//                 styles.tabText,
//                 selectedTab === tab && styles.activeTabText,
//               ]}
//             >
//               {tab}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </View>

//       <View style={styles.chartWrapper}>
//         <Text style={styles.title}>Income & Expenses</Text>

//         <BarChart
//           style={{ height: 160 }}
//           data={barData}
//           yAccessor={({ item }) => item}
//           contentInset={{ top: 10, bottom: 10 }}
//           spacingInner={0.2}
//           animate
//         >
//           <Grid />
//         </BarChart>

//         <XAxis
//           style={{ marginTop: 10 }}
//           data={labels}
//           scale={scale.scaleBand}
//           formatLabel={(value, index) => labels[index]}
//           labelStyle={{ color: colors.black }}
//         />

//         <View style={styles.iconRow}>
//           <Ionicons name="calendar-outline" size={20} color={colors.darkGray} />
//           <Ionicons name="search-outline" size={20} color={colors.darkGray} />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default IncomeExpenseChart;

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//     backgroundColor: colors.white,
//     borderRadius: 20,
//     padding: 16,
//     elevation: 4,
//   },
//   chartWrapper: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: colors.lightGreen,
//     borderRadius: 16,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: colors.black,
//     marginBottom: 12,
//   },
//   tabRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   tab: {
//     paddingVertical: 6,
//     paddingHorizontal: 14,
//     borderRadius: 20,
//     backgroundColor: colors.lightGray,
//   },
//   activeTab: {
//     backgroundColor: colors.blueAccent,
//   },
//   tabText: {
//     color: colors.gray,
//     fontSize: 12,
//   },
//   activeTabText: {
//     color: colors.white,
//     fontWeight: 'bold',
//   },
//   iconRow: {
//     position: 'absolute',
//     top: 8,
//     right: 10,
//     flexDirection: 'row',
//     gap: 16,
//   },
// });
