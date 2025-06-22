// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// // import { AntDesign, Feather } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';

// // const { height } = Dimensions.get('window');

// // const issues = [
// //   {
// //     title: 'Ride Booking',
// //     description: '',
// //   },
// //   {
// //     title: 'Payment',
// //     description:
// //       '\u2022 Earnings are not reflecting correctly\n\u2022 Haven\'t received payout\n\u2022 Unable to withdraw earnings\n\nPlease ensure your bank details are updated and transactions are not under review. If issues persist, contact our support team immediately.',
// //   },
// //   {
// //     title: 'Sign in issue',
// //     description: '',
// //   },
// //   {
// //     title: 'Map Loading',
// //     description: '',
// //   },
// //   {
// //     title: 'Other Issue',
// //     description: '',
// //   },
// // ];

// // const IssueScreen = () => {
// //   const [expanded, setExpanded] = useState(null);

// //   const toggleExpand = (index) => {
// //     setExpanded(expanded === index ? null : index);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.header}>
// //         <AntDesign name="arrowleft" size={26} color="black" />
// //         <Text style={styles.headerTitle}>Issue</Text>
// //         <TouchableOpacity style={styles.helpIcon}>
// //           <Text style={styles.helpText}>Help</Text>
// //           <Feather name="help-circle" size={18} color="#FFD600" />
// //         </TouchableOpacity>
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         {issues.map((item, index) => (
// //           <LinearGradient
// //             key={index}
// //             colors={['#FFF8DC', '#FFD54F']}
// //             style={styles.card}
// //           >
// //             <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardHeader}>
// //               <Feather name="help-circle" size={22} color="black" style={styles.icon} />
// //               <Text style={styles.cardTitle}>{item.title}</Text>
// //               <AntDesign name={expanded === index ? 'up' : 'down'} size={20} color="black" style={styles.expandIcon} />
// //             </TouchableOpacity>
// //             {expanded === index && item.description !== '' && (
// //               <Text style={styles.cardDescription}>{item.description}</Text>
// //             )}
// //           </LinearGradient>
// //         ))}
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 16,
// //     paddingTop: 50,
// //     paddingBottom: 20,
// //   },
// //   headerTitle: {
// //     fontSize: 22,
// //     fontWeight: 'bold',
// //     color: '#FBC02D',
// //   },
// //   helpIcon: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF9C4',
// //     paddingHorizontal: 12,
// //     paddingVertical: 6,
// //     borderRadius: 14,
// //   },
// //   helpText: {
// //     fontSize: 15,
// //     color: '#F9A825',
// //     marginRight: 5,
// //     fontWeight: '600',
// //   },
// //   scrollContainer: {
// //     padding: 20,
// //     paddingBottom: 50,
// //     minHeight: height - 100,
// //   },
// //   card: {
// //     borderRadius: 22,
// //     paddingVertical: 28,
// //     paddingHorizontal: 20,
// //     marginBottom: 24,
// //     elevation: 4,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.15,
// //     shadowRadius: 4,
// //     minHeight: 110,
// //     justifyContent: 'center',
// //   },
// //   cardHeader: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   icon: {
// //     marginRight: 14,
// //   },
// //   expandIcon: {
// //     marginLeft: 'auto',
// //   },
// //   cardTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#000',
// //   },
// //   cardDescription: {
// //     marginTop: 16,
// //     fontSize: 15,
// //     color: '#333',
// //     lineHeight: 22,
// //     textAlign: 'center',
// //   },
// // });

// // export default IssueScreen;
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import { AntDesign, Feather } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { height } = Dimensions.get('window');

// const issues = [
//   {
//     title: 'Ride Booking',
//     description: '',
//   },
//   {
//     title: 'Payment',
//     description:
//       '\u2022 Earnings are not reflecting correctly\n\u2022 Haven\'t received payout\n\u2022 Unable to withdraw earnings\n\nPlease ensure your bank details are updated and transactions are not under review. If issues persist, contact our support team immediately.',
//   },
//   {
//     title: 'Sign in issue',
//     description: '',
//   },
//   {
//     title: 'Map Loading',
//     description: '',
//   },
//   {
//     title: 'Other Issue',
//     description: '',
//   },
// ];

// const IssueScreen = () => {
//   const [expanded, setExpanded] = useState(null);

//   const toggleExpand = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <AntDesign name="arrowleft" size={26} color="black" />
//         <Text style={styles.headerTitle}>Issue</Text>
//         <TouchableOpacity style={styles.helpIcon}>
//           <Text style={styles.helpText}>Help</Text>
//           <Feather name="help-circle" size={18} color="#FFD600" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         {issues.map((item, index) => (
//           <LinearGradient
//             key={index}
//             colors={['#FFFDE7', '#FFECB3']}
//             style={styles.card}
//           >
//             <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardHeader}>
//               <Feather name="help-circle" size={20} color="black" style={styles.icon} />
//               <Text style={styles.cardTitle}>{item.title}</Text>
//               <AntDesign name={expanded === index ? 'up' : 'down'} size={18} color="black" style={styles.expandIcon} />
//             </TouchableOpacity>
//             {expanded === index && item.description !== '' && (
//               <Text style={styles.cardDescription}>{item.description}</Text>
//             )}
//           </LinearGradient>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFDE7',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingTop: 50,
//     paddingBottom: 20,
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FBC02D',
//   },
//   helpIcon: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF9C4',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 14,
//   },
//   helpText: {
//     fontSize: 15,
//     color: '#F9A825',
//     marginRight: 5,
//     fontWeight: '600',
//   },
//   scrollContainer: {
//     padding: 20,
//     paddingBottom: 50,
//     minHeight: height - 100,
//   },
//   card: {
//     borderRadius: 18,
//     paddingVertical: 18,
//     paddingHorizontal: 16,
//     marginBottom: 20,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     justifyContent: 'center',
//     minHeight: 90,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginRight: 12,
//   },
//   expandIcon: {
//     marginLeft: 'auto',
//   },
//   cardTitle: {
//     fontSize: 17,
//     fontWeight: 'bold',
//     color: '#000',
//   },
//   cardDescription: {
//     marginTop: 12,
//     fontSize: 14,
//     color: '#333',
//     lineHeight: 20,
//     textAlign: 'center',
//   },
// });

// export default IssueScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

const issues = [
  {
    title: 'Ride Booking',
    description: '',
  },
  {
    title: 'Payment',
    description:
      '\u2022 Earnings are not reflecting correctly\n\u2022 Haven\'t received payout\n\u2022 Unable to withdraw earnings\n\nPlease ensure your bank details are updated and transactions are not under review. If issues persist, contact our support team immediately.',
  },
  {
    title: 'Sign in issue',
    description: '',
  },
  {
    title: 'Map Loading',
    description: '',
  },
  {
    title: 'Other Issue',
    description: '',
  },
];

const IssueScreen = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={26} color="black" />
        <Text style={styles.headerTitle}>Issue</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <Text style={styles.helpText}>Help</Text>
          <Feather name="help-circle" size={18} color="#FFD600" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {issues.map((item, index) => (
          <LinearGradient
            key={index}
            colors={['#FFECB3', '#FFB300']}
            style={styles.card}
          >
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardHeader}>
              <Feather name="help-circle" size={20} color="black" style={styles.icon} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <AntDesign name={expanded === index ? 'up' : 'down'} size={18} color="black" style={styles.expandIcon} />
            </TouchableOpacity>
            {expanded === index && item.description !== '' && (
              <Text style={styles.cardDescription}>{item.description}</Text>
            )}
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  helpIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  helpText: {
    fontSize: 15,
    color: '#F9A825',
    marginRight: 5,
    fontWeight: '600',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 50,
    minHeight: height - 100,
  },
  card: {
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    justifyContent: 'center',
    minHeight: 80,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  expandIcon: {
    marginLeft: 'auto',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDescription: {
    marginTop: 12,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    textAlign: 'center',
  },
});

export default IssueScreen;
