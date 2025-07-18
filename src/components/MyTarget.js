// // components/MyTargets.js

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { ProgressCircle } from 'react-native-svg-charts';
// import colors from '../theme/colors';

// const TargetCard = ({ label, percentage }) => {
//   return (
//     <View style={styles.card}>
//       <ProgressCircle
//         style={{ height: 80 }}
//         progress={percentage / 100}
//         progressColor={colors.blueAccent}
//         backgroundColor={colors.lightBlue}
//         strokeWidth={8}
//       />
//       <View style={styles.percentTextWrapper}>
//         <Text style={styles.percentText}>{`${percentage}%`}</Text>
//       </View>
//       <Text style={styles.label}>{label}</Text>
//     </View>
//   );
// };

// const MyTarget = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>My Targets</Text>
//       <View style={styles.row}>
//         <TargetCard label="Travel" percentage={30} />
//         <TargetCard label="Car" percentage={50} />
//       </View>
//     </View>
//   );
// };

// export default MyTarget;

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 20,
//     marginTop: 20,
//     backgroundColor: colors.white,
//     borderRadius: 16,
//     padding: 16,
//     elevation: 3,
//   },
//   heading: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: colors.black,
//     marginBottom: 12,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   card: {
//     alignItems: 'center',
//     width: '45%',
//     backgroundColor: colors.lightBlue,
//     padding: 10,
//     borderRadius: 16,
//   },
//   percentTextWrapper: {
//     position: 'absolute',
//     top: 26,
//   },
//   percentText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: colors.white,
//   },
//   label: {
//     marginTop: 8,
//     fontSize: 14,
//     color: colors.black,
//   },
// });
