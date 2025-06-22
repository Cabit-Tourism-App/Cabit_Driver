// // import React from 'react';
// // import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// // import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
// // import { LinearGradient } from 'expo-linear-gradient';

// // const { height } = Dimensions.get('window');

// // const ContactUsScreen = () => {
// //   return (
// //     <View style={styles.container}>
// //       <View style={styles.appbar}>
// //         <TouchableOpacity>
// //           <AntDesign name="arrowleft" size={24} color="black" />
// //         </TouchableOpacity>
// //         <Text style={styles.appbarTitle}>Contact Us</Text>
// //         <TouchableOpacity style={styles.helpIcon}>
// //           <Text style={styles.helpText}>Help</Text>
// //           <Feather name="help-circle" size={16} color="#FFD600" />
// //         </TouchableOpacity>
// //       </View>

// //       <ScrollView contentContainerStyle={styles.scrollContainer}>
// //         <Text style={styles.subtitle}>Let us know your issue & feedback</Text>

// //         <View style={styles.actionRow}>
// //           <TouchableOpacity style={styles.callBtn}>
// //             <FontAwesome name="phone" size={16} color="white" style={{ marginRight: 8 }} />
// //             <Text style={styles.callText}>Call Us</Text>
// //           </TouchableOpacity>

// //           <TouchableOpacity style={styles.emailBtn}>
// //             <FontAwesome name="envelope" size={16} color="#000" style={{ marginRight: 6 }} />
// //             <Text style={styles.emailText}>Email Us</Text>
// //           </TouchableOpacity>
// //         </View>

// //         <LinearGradient colors={['#FFF8E1', '#FFECB3']} style={styles.formBox}>
// //           <Text style={styles.formTitle}>Write Us</Text>

// //           <TextInput
// //             placeholder="Describe us your issue"
// //             placeholderTextColor="#777"
// //             multiline
// //             numberOfLines={5}
// //             style={styles.textArea}
// //           />

// //           <Text style={styles.label}>Your Email Address</Text>
// //           <Text style={styles.emailValue}>Harshaditya9552@gmail.com</Text>
// //         </LinearGradient>

// //         <TouchableOpacity style={styles.continueBtn}>
// //           <LinearGradient colors={['#FFE082', '#FBC02D']} style={styles.continueGradient}>
// //             <Text style={styles.continueText}>Continue</Text>
// //           </LinearGradient>
// //         </TouchableOpacity>
// //       </ScrollView>
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#FFFAF0',
// //   },
// //   appbar: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     justifyContent: 'space-between',
// //     paddingHorizontal: 16,
// //     paddingTop: 50,
// //     paddingBottom: 16,
// //     backgroundColor: '#fff',
// //   },
// //   appbarTitle: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //     color: '#FBC02D',
// //   },
// //   helpIcon: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFF9C4',
// //     paddingHorizontal: 10,
// //     paddingVertical: 4,
// //     borderRadius: 14,
// //   },
// //   helpText: {
// //     fontSize: 14,
// //     color: '#F9A825',
// //     marginRight: 4,
// //     fontWeight: '600',
// //   },
// //   scrollContainer: {
// //     padding: 20,
// //     paddingBottom: 40,
// //     minHeight: height,
// //   },
// //   subtitle: {
// //     fontSize: 15,
// //     color: '#555',
// //     marginBottom: 20,
// //   },
// //   actionRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     marginBottom: 30,
// //   },
// //   callBtn: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#000',
// //     paddingVertical: 14,
// //     paddingHorizontal: 20,
// //     borderRadius: 12,
// //     flex: 1,
// //     marginRight: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 4,
// //     elevation: 4,
// //   },
// //   callText: {
// //     color: '#fff',
// //     fontWeight: 'bold',
// //     fontSize: 15,
// //   },
// //   emailBtn: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //     backgroundColor: '#FFECB3',
// //     paddingVertical: 14,
// //     paddingHorizontal: 20,
// //     borderRadius: 12,
// //     flex: 1,
// //     marginLeft: 10,
// //     shadowColor: '#000',
// //     shadowOffset: { width: 0, height: 2 },
// //     shadowOpacity: 0.2,
// //     shadowRadius: 4,
// //     elevation: 4,
// //   },
// //   emailText: {
// //     fontWeight: 'bold',
// //     color: '#000',
// //     fontSize: 15,
// //   },
// //   formBox: {
// //     borderRadius: 20,
// //     padding: 20,
// //     marginBottom: 30,
// //   },
// //   formTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: '#000',
// //     marginBottom: 10,
// //   },
// //   textArea: {
// //     height: 120,
// //     backgroundColor: '#FFFDE7',
// //     borderRadius: 12,
// //     padding: 12,
// //     textAlignVertical: 'top',
// //     fontSize: 14,
// //     marginBottom: 20,
// //     color: '#000',
// //   },
// //   label: {
// //     fontSize: 15,
// //     fontWeight: 'bold',
// //     marginBottom: 4,
// //     color: '#000',
// //   },
// //   emailValue: {
// //     fontSize: 15,
// //     color: '#000',
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#000',
// //     paddingBottom: 6,
// //     fontWeight: '600',
// //   },
// //   continueBtn: {
// //     borderRadius: 12,
// //     overflow: 'hidden',
// //   },
// //   continueGradient: {
// //     paddingVertical: 16,
// //     alignItems: 'center',
// //   },
// //   continueText: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#000',
// //   },
// // });

// // export default ContactUsScreen;
// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
// import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';

// const { height } = Dimensions.get('window');

// const ContactUsScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.appbar}>
//         <TouchableOpacity>
//           <AntDesign name="arrowleft" size={24} color="black" />
//         </TouchableOpacity>
//         <Text style={styles.appbarTitle}>Contact Us</Text>
//         <TouchableOpacity style={styles.helpIcon}>
//           <Text style={styles.helpText}>Help</Text>
//           <Feather name="help-circle" size={16} color="#FFD600" />
//         </TouchableOpacity>
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <Text style={styles.subtitle}>Let us know your issue & feedback</Text>

//         <View style={styles.actionRow}>
//           <TouchableOpacity style={styles.callBtn}>
//             <FontAwesome name="phone" size={16} color="white" style={{ marginRight: 8 }} />
//             <Text style={styles.callText}>Call Us</Text>
//           </TouchableOpacity>

//           <TouchableOpacity style={styles.emailBtn}>
//             <FontAwesome name="envelope" size={16} color="#000" style={{ marginRight: 6 }} />
//             <Text style={styles.emailText}>Email Us</Text>
//           </TouchableOpacity>
//         </View>

//         <LinearGradient colors={['#FFF8E1', '#FFECB3']} style={styles.formBox}>
//           <Text style={styles.formTitle}>Write Us</Text>

//           <TextInput
//             placeholder="Describe us your issue"
//             placeholderTextColor="#777"
//             multiline
//             numberOfLines={5}
//             style={styles.textArea}
//           />

//           <Text style={styles.label}>Your Email Address</Text>
//           <Text style={styles.emailValue}>Harshaditya9552@gmail.com</Text>
//         </LinearGradient>
//       </ScrollView>

//       <TouchableOpacity style={styles.continueBtn}>
//         <LinearGradient colors={['#FFE082', '#FBC02D']} style={styles.continueGradient}>
//           <Text style={styles.continueText}>Continue</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFAF0',
//   },
//   appbar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     paddingTop: 50,
//     paddingBottom: 24,
//     backgroundColor: '#fff',
//   },
//   appbarTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#FBC02D',
//   },
//   helpIcon: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF9C4',
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 14,
//   },
//   helpText: {
//     fontSize: 14,
//     color: '#F9A825',
//     marginRight: 4,
//     fontWeight: '600',
//   },
//   scrollContainer: {
//     padding: 20,
//     paddingBottom: 20,
//     flexGrow: 1,
//   },
//   subtitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 24,
//     textAlign: 'center',
//   },
//   actionRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 30,
//   },
//   callBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#000',
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     flex: 1,
//     marginRight: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   callText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 15,
//   },
//   emailBtn: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFECB3',
//     paddingVertical: 14,
//     paddingHorizontal: 20,
//     borderRadius: 12,
//     flex: 1,
//     marginLeft: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   emailText: {
//     fontWeight: 'bold',
//     color: '#000',
//     fontSize: 15,
//   },
//   formBox: {
//     borderRadius: 20,
//     padding: 20,
//     marginBottom: 30,
//   },
//   formTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//     marginBottom: 10,
//   },
//   textArea: {
//     height: 120,
//     backgroundColor: '#FFFDE7',
//     borderRadius: 12,
//     padding: 12,
//     textAlignVertical: 'top',
//     fontSize: 14,
//     marginBottom: 20,
//     color: '#000',
//   },
//   label: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     marginBottom: 4,
//     color: '#000',
//   },
//   emailValue: {
//     fontSize: 15,
//     color: '#000',
//     borderBottomWidth: 1,
//     borderBottomColor: '#000',
//     paddingBottom: 6,
//     fontWeight: '600',
//   },
//   continueBtn: {
//     borderRadius: 12,
//     overflow: 'hidden',
//     marginHorizontal: 20,
//     marginBottom: 20,
//   },
//   continueGradient: {
//     paddingVertical: 16,
//     alignItems: 'center',
//   },
//   continueText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });

// export default ContactUsScreen;

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AntDesign, Feather, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

const ContactUsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.appbarTitle}>Contact Us</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <Text style={styles.helpText}>Help</Text>
          <Feather name="help-circle" size={16} color="#FFD600" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.subtitle}>Let us know your issue & feedback</Text>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.callBtn}>
            <FontAwesome name="phone" size={16} color="white" style={{ marginRight: 8 }} />
            <Text style={styles.callText}>Call Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.emailBtn}>
            <FontAwesome name="envelope" size={16} color="#000" style={{ marginRight: 6 }} />
            <Text style={styles.emailText}>Email Us</Text>
          </TouchableOpacity>
        </View>

        <LinearGradient colors={['#FFE082', '#F9A825']} style={styles.formBox}>
          <Text style={styles.formTitle}>Write Us</Text>

          <TextInput
            placeholder="Describe us your issue"
            placeholderTextColor="#777"
            multiline
            numberOfLines={10}
            style={styles.textArea}
          />

          <Text style={styles.label}>Your Email Address</Text>
          <Text style={styles.emailValue}>Harshaditya9552@gmail.com</Text>
        </LinearGradient>
      </ScrollView>

      <TouchableOpacity style={styles.continueBtn}>
        <LinearGradient colors={['#FFE082', '#FBC02D']} style={styles.continueGradient}>
          <Text style={styles.continueText}>Continue</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 24,
    backgroundColor: '#fff',
  },
  appbarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  helpIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
  },
  helpText: {
    fontSize: 14,
    color: '#F9A825',
    marginRight: 4,
    fontWeight: '600',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 20,
    flexGrow: 1,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  callBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  callText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  emailBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFECB3',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  emailText: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15,
  },
  formBox: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  textArea: {
    height: 180,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    textAlignVertical: 'top',
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  emailValue: {
    fontSize: 15,
    color: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingBottom: 6,
    fontWeight: '600',
  },
  continueBtn: {
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  continueGradient: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  continueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default ContactUsScreen;

