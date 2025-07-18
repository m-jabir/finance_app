// import React, { useState } from 'react';
// import { View, ScrollView, StyleSheet } from 'react-native';

// // ✅ Reuse components from your project
// import WrapperContainer from '../components/WrapperContainer';
// import SegmentControl from '../components/SegmentControl';
// import Header from '../components/Header';
// import colors from '../theme/colors';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import App from '../../App';
// const Analysis = () => {
//   const [selectedSegment, setSelectedSegment] = useState('Weekly');

//   return (
//     <WrapperContainer>
//       <Header userName="Hello Jabir" greeting="Welcome to Reports" />
//       <View style={styles.scrollContent}>
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
//           <SegmentControl
//             options={['Daily', 'Weekly', 'Monthly']}
//             selected={selectedSegment}
//             onSelect={setSelectedSegment}
//           />
//           {/* Add more reused components here if needed */}
//         </ScrollView>
//       </View>
//     </WrapperContainer>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContent: {
//     flex: 1,
//     backgroundColor: colors.white,
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 30,
//     marginTop: 20,
//     paddingBottom: 70,
//   },
// });

// export default Analysis;


import React, { useState } from 'react';
import { View, ScrollView, StyleSheet ,Text} from 'react-native';
import WrapperContainer from '../components/WrapperContainer';
import SegmentControl from '../components/SegmentControl';
import Header from '../components/Header';
import colors from '../theme/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SavingsCard from '../components/SavingsCard';
import BalanceOverview from'../components/BalanceOverview';
import IncomeExpense from '../components/IncomeExpense';
// import MyTarget from '../components/MyTarget';
// import IncomeExpenseChart from '../components/IncomeExpenseChart';


const AnalysisScreen = () => {
  const [selectedSegment, setSelectedSegment] = useState('Weekly');
  return (
    <WrapperContainer>
  <View style={styles.header}>
        <Text style={styles.headerText}>Analysis</Text>
      </View>
      <BalanceOverview totalBalance={7783} totalExpense={-1187} />

      <View style={styles.scrollContent}>
      
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <SegmentControl
            options={['Daily', 'Weekly','Month','Yearly']}
            selected={selectedSegment}
            onSelect={setSelectedSegment}

          />
        </ScrollView>
        {/* <MyTarget/> */}
        {/* <IncomeExpenseChart /> */}

        <IncomeExpense income={4120.0} expense={1187.4} />


     

       {/* <CustomBottomTab 
       state={} 
       descriptors={}
        navigation ={}
        /> */}
      </View>
    
    </WrapperContainer>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flex:1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 10,
    paddingBottom: 70,
  },
  header: {
    padding: 50,
    alignItems: 'center',
    fontWeight: 'bold',

   
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold', 
  },



   });

export default AnalysisScreen;


