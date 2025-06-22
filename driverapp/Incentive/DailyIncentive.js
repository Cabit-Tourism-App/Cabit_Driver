// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   ScrollView,
//   Dimensions,
//   StatusBar,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

// const { width, height } = Dimensions.get('window');

// const CabitIncentivesScreen = () => {
//   const [activeTab, setActiveTab] = useState('Daily');

//   // Sample data for incentives
//   const incentiveData = [
//     { id: 1, task: 'Complete 10 rides, get', reward: 100, completed: true },
//     { id: 2, task: 'Collect 50 stars from customer rating, get', reward: 200, completed: false },
//     { id: 3, task: 'Complete 40 rides, get', reward: 200, completed: false },
//     { id: 4, task: 'Complete 50 rides, get', reward: 100, completed: false },
//   ];

//   const IncentiveCard = ({ item }) => (
//     <View style={styles.incentiveCard}>
//       <View style={styles.cardContent}>
//         <View style={styles.statusIndicator}>
//           {item.completed ? (
//             <View style={styles.completedIcon}>
//               <Text style={styles.checkMark}>✓</Text>
//             </View>
//           ) : (
//             <View style={styles.pendingIcon} />
//           )}
//           <View style={styles.verticalLine} />
//         </View>
//         <View style={styles.taskInfo}>
//           <Text style={styles.taskText}>{item.task}</Text>
//         </View>
//         <View style={styles.rewardContainer}>
//           <Text style={styles.rewardText}>₹ {item.reward}</Text>
//         </View>
//       </View>
//     </View>
//   );

//   const BottomTabBar = () => (
//     <View style={styles.bottomTabBar}>
//       <TouchableOpacity style={styles.tabItem}>
//         <Text style={styles.tabIcon}>🏠</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tabItem}>
//         <Text style={styles.tabIcon}>📊</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={[styles.tabItem, styles.activeTabItem]}>
//         <View style={styles.activeTabIconContainer}>
//           <Text style={styles.activeTabIcon}>💰</Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tabItem}>
//         <Text style={styles.tabIcon}>👤</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#F1C40F" barStyle="dark-content" />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerTop}>
//           <TouchableOpacity style={styles.backButton}>
//             <Text style={styles.backIcon}>←</Text>
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Incentives</Text>
//           <TouchableOpacity style={styles.helpButton}>
//             <Text style={styles.helpIcon}>?</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
//         {/* Tab Container */}
//         <View style={styles.tabContainer}>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'Daily' && styles.activeTab]}
//             onPress={() => setActiveTab('Daily')}
//           >
//             <Text style={[styles.tabText, activeTab === 'Daily' && styles.activeTabText]}>
//               Daily
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.tab, activeTab === 'Weekly' && styles.activeTab]}
//             onPress={() => setActiveTab('Weekly')}
//           >
//             <Text style={[styles.tabText, activeTab === 'Weekly' && styles.activeTabText]}>
//               Weekly
//             </Text>
//           </TouchableOpacity>
//         </View>

//         {/* Main Card */}
//         <View style={styles.mainCard}>
//           <View style={styles.todaySection}>
//             <View style={styles.todayCircle}>
//               <Text style={styles.todayLabel}>Today</Text>
//               <Text style={styles.todayTime}>10:51 PM</Text>
//             </View>
//           </View>
          
//           <View style={styles.dateChip}>
//             <Text style={styles.dateText}>Sunday, June 8</Text>
//           </View>
//         </View>

//         {/* Earn Section */}
//         <View style={styles.earnCard}>
//           <Text style={styles.earnTitle}>Earn up to ₹ 500</Text>
//           <Text style={styles.earnSubtitle}>by completing today's goals</Text>
//         </View>

//         {/* Incentive Cards */}
//         <View style={styles.incentivesList}>
//           {incentiveData.map((item) => (
//             <IncentiveCard key={item.id} item={item} />
//           ))}
//         </View>
//       </ScrollView>

//       {/* Bottom Tab Bar */}
//       <BottomTabBar />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F5F5F5',
//   },
//   header: {
//     backgroundColor: '#F1C40F',
//     paddingTop: 10,
//     paddingBottom: 15,
//   },
//   headerTop: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginTop: 5,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backIcon: {
//     fontSize: 20,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   headerTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#000',
//   },
//   helpButton: {
//     width: 30,
//     height: 30,
//     borderRadius: 15,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   helpIcon: {
//     fontSize: 16,
//     color: '#000',
//     fontWeight: 'bold',
//   },
//   content: {
//     flex: 1,
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     margin: 20,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 25,
//     padding: 4,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.1,
//     shadowRadius: 2,
//   },
//   tab: {
//     flex: 1,
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   activeTab: {
//     backgroundColor: '#F1C40F',
//   },
//   tabText: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   activeTabText: {
//     color: '#000',
//     fontWeight: '600',
//   },
//   mainCard: {
//     backgroundColor: '#F1C40F',
//     marginHorizontal: 20,
//     borderRadius: 15,
//     padding: 25,
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   todaySection: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   todayCircle: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: '#FFFFFF',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   todayLabel: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginBottom: 5,
//   },
//   todayTime: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   dateChip: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)',
//     paddingHorizontal: 20,
//     paddingVertical: 8,
//     borderRadius: 20,
//   },
//   dateText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//   },
//   earnCard: {
//     backgroundColor: '#F4D03F',
//     marginHorizontal: 20,
//     borderRadius: 12,
//     padding: 20,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   earnTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 5,
//   },
//   earnSubtitle: {
//     fontSize: 14,
//     color: '#666',
//     fontWeight: '500',
//   },
//   incentivesList: {
//     paddingHorizontal: 20,
//     paddingBottom: 100,
//   },
//   incentiveCard: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 12,
//     marginBottom: 12,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.05,
//     shadowRadius: 2,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   statusIndicator: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   completedIcon: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: '#27AE60',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   checkMark: {
//     color: '#FFFFFF',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   pendingIcon: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     backgroundColor: '#F1C40F',
//   },
//   verticalLine: {
//     width: 2,
//     height: 30,
//     backgroundColor: '#E0E0E0',
//     marginTop: 5,
//   },
//   taskInfo: {
//     flex: 1,
//   },
//   taskText: {
//     fontSize: 14,
//     color: '#333',
//     fontWeight: '500',
//     lineHeight: 20,
//   },
//   rewardContainer: {
//     marginLeft: 10,
//   },
//   rewardText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#F39C12',
//   },
//   bottomTabBar: {
//     flexDirection: 'row',
//     backgroundColor: '#000',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     elevation: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: -2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   tabItem: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   activeTabItem: {
//     alignItems: 'center',
//   },
//   activeTabIconContainer: {
//     backgroundColor: '#F1C40F',
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabIcon: {
//     fontSize: 20,
//     color: '#FFFFFF',
//   },
//   activeTabIcon: {
//     fontSize: 20,
//     color: '#000',
//   },
// });

// export default CabitIncentivesScreen;
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const IncentivesScreen = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  const incentiveData = [
    { id: 1, task: 'Complete 10 rides, get', reward: 100, completed: true },
    { id: 2, task: 'Collect 50 stars from customer rating, get', reward: 200, completed: false },
    { id: 3, task: 'Complete 40 rides, get', reward: 200, completed: false },
    { id: 4, task: 'Complete 50 rides, get', reward: 100, completed: false },
  ];

  const IncentiveCard = ({ item }) => (
    <View style={styles.incentiveCard}>
      <View style={styles.cardContent}>
        <View style={styles.statusIndicator}>
          {item.completed ? (
            <View style={styles.completedIcon}>
              <Text style={styles.checkMark}>✓</Text>
            </View>
          ) : (
            <View style={styles.pendingIcon} />
          )}
          <View style={styles.verticalLine} />
        </View>
        <View style={styles.taskInfo}>
          <Text style={styles.taskText}>{item.task}</Text>
        </View>
        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>₹ {item.reward}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <LinearGradient colors={["#FFF9C4", "#FFE082"]} style={styles.container}>
      <StatusBar backgroundColor="#F1C40F" barStyle="dark-content" />

      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>🎯 Incentives</Text>
          <TouchableOpacity style={styles.helpButton}>
            <Text style={styles.helpIcon}>?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Daily' && styles.activeTab]}
            onPress={() => setActiveTab('Daily')}
          >
            <Text style={[styles.tabText, activeTab === 'Daily' && styles.activeTabText]}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Weekly' && styles.activeTab]}
            onPress={() => setActiveTab('Weekly')}
          >
            <Text style={[styles.tabText, activeTab === 'Weekly' && styles.activeTabText]}>Weekly</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mainCard}>
          <View style={styles.todaySection}>
            <View style={styles.todayCircle}>
              <Text style={styles.todayLabel}>Today</Text>
              <Text style={styles.todayTime}>10:51 PM</Text>
            </View>
          </View>

          <View style={styles.dateChip}>
            <Text style={styles.dateText}>Sunday, June 8</Text>
          </View>
        </View>

        <View style={styles.earnCard}>
          <Text style={styles.earnTitle}>Earn up to ₹ 500</Text>
          <Text style={styles.earnSubtitle}>by completing today's goals</Text>
        </View>

        <View style={styles.incentivesList}>
          {incentiveData.map((item) => (
            <IncentiveCard key={item.id} item={item} />
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#F1C40F',
    paddingTop: 10,
    paddingBottom: 15,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  helpButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIcon: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 4,
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#F1C40F',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#000',
    fontWeight: '600',
  },
  mainCard: {
    backgroundColor: '#F1C40F',
    marginHorizontal: 20,
    borderRadius: 15,
    padding: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  todaySection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  todayCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  todayLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  todayTime: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  dateChip: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  earnCard: {
    backgroundColor: '#F4D03F',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  earnTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  earnSubtitle: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  incentivesList: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  incentiveCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  statusIndicator: {
    alignItems: 'center',
    marginRight: 15,
  },
  completedIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#27AE60',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMark: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  pendingIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F1C40F',
  },
  verticalLine: {
    width: 2,
    height: 30,
    backgroundColor: '#E0E0E0',
    marginTop: 5,
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
    lineHeight: 20,
  },
  rewardContainer: {
    marginLeft: 10,
  },
  rewardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F39C12',
  },
});

export default IncentivesScreen;
