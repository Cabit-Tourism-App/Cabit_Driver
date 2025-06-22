import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const CabitIncentivesScreen = () => {
  const [activeTab, setActiveTab] = useState('Daily');

  // Sample data for incentives
  const incentiveData = [
    { id: 1, task: 'Complete 20 rides, get', reward: 300, progress: 15, total: 20 },
    { id: 2, task: 'Complete 30 rides, get', reward: 200, progress: 25, total: 30 },
    { id: 3, task: 'Complete 40 rides, get', reward: 200, progress: 30, total: 40 },
    { id: 4, task: 'Complete 50 rides, get', reward: 100, progress: 45, total: 50 },
  ];

  const CircularProgress = ({ progress, total, size = 50 }) => {
    const percentage = (progress / total) * 100;
    const radius = size / 2 - 5;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <View style={[styles.progressContainer, { width: size, height: size }]}>
        <View style={styles.progressBackground}>
          <View 
            style={[
              styles.progressFill, 
              { 
                width: `${percentage}%`,
                backgroundColor: percentage === 100 ? '#FFD700' : '#FFA500'
              }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>{progress}/{total}</Text>
      </View>
    );
  };

  const IncentiveCard = ({ item }) => (
    <View style={styles.incentiveCard}>
      <View style={styles.cardContent}>
        <CircularProgress progress={item.progress} total={item.total} />
        <View style={styles.taskInfo}>
          <Text style={styles.taskText}>{item.task}</Text>
          <View style={styles.rewardContainer}>
            <Text style={styles.coinIcon}>🪙</Text>
            <Text style={styles.rewardText}>{item.reward}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>🎯 Incentives</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Daily' && styles.activeTab]}
              onPress={() => setActiveTab('Daily')}
            >
              <Text style={[styles.tabText, activeTab === 'Daily' && styles.activeTabText]}>
                Daily
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'Weekly' && styles.activeTab]}
              onPress={() => setActiveTab('Weekly')}
            >
              <Text style={[styles.tabText, activeTab === 'Weekly' && styles.activeTabText]}>
                Weekly
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Main Card */}
        <LinearGradient
          colors={['#FFF8DC', '#FFE4B5', '#FFA500']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.mainCard}
        >
          <View style={styles.dateSection}>
            <View style={styles.dateCircle}>
              <Text style={styles.dateMonth}>March</Text>
              <Text style={styles.dateDay}>10-16</Text>
            </View>
            <View style={[styles.dateCircle, styles.activeDateCircle]}>
              <Text style={[styles.dateMonth, styles.activeDateText]}>March</Text>
              <Text style={[styles.dateDay, styles.activeDateText]}>17-23</Text>
            </View>
            <View style={styles.dateCircle}>
              <Text style={styles.dateMonth}>March</Text>
              <Text style={styles.dateDay}>24-30</Text>
            </View>
          </View>
          
          <Text style={styles.dateRange}>Mon, March 17 - Sun, March 23</Text>
          
          <View style={styles.earnSection}>
            <Text style={styles.earnTitle}>Earn up to 🪙 900</Text>
            <Text style={styles.earnSubtitle}>by completing 50 rides</Text>
          </View>
        </LinearGradient>

        {/* Incentive Cards */}
        <View style={styles.incentivesList}>
          {incentiveData.map((item) => (
            <IncentiveCard key={item.id} item={item} />
          ))}
        </View>

        {/* Terms */}
        <TouchableOpacity style={styles.termsContainer}>
          <Text style={styles.termsText}>Terms & Conditions</Text>
        </TouchableOpacity>

        {/* Want to earn more button */}
        <LinearGradient
          colors={['#FFB300', '#FFECB3']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.earnMoreButton}
        >
          <Text style={styles.earnMoreText}>Want to earn more?</Text>
          <Text style={styles.earnMoreIcon}>🚗</Text>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F1F5F9',
    borderRadius: 25,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#FFA500',
  },
  tabText: {
    fontSize: 14,
    color: '#64748B',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  mainCard: {
    margin: 20,
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  dateSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDateCircle: {
    backgroundColor: '#FF8C00',
    transform: [{ scale: 1.1 }],
  },
  dateMonth: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  dateDay: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 2,
  },
  activeDateText: {
    color: '#FFFFFF',
  },
  dateRange: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    fontWeight: '500',
  },
  earnSection: {
    alignItems: 'center',
  },
  earnTitle: {
    fontSize: 20,
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
  },
  incentiveCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  progressContainer: {
    marginRight: 15,
  },
  progressBackground: {
    width: 50,
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    fontWeight: '500',
  },
  taskInfo: {
    flex: 1,
  },
  taskText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIcon: {
    fontSize: 16,
    marginRight: 5,
  },
  rewardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  termsContainer: {
    alignItems: 'center',
    paddingVertical: 15,
  },
  termsText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  earnMoreButton: {
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  earnMoreText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  earnMoreIcon: {
    fontSize: 18,
  },
});

export default CabitIncentivesScreen;
