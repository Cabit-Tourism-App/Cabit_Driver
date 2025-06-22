import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const EmergencyScreen = () => {
  const handleSOSPress = () => {
    alert('SOS activated! Contacting nearest emergency services...');
  };

  return (
    <LinearGradient colors={['#FFE082', '#FFCA28']} style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Emergency</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <Text style={styles.helpText}>Help</Text>
          <Feather name="help-circle" size={18} color="#FFD600" />
        </TouchableOpacity>
      </View>

      {/* SOS Button */}
      <View style={styles.content}>
        <View style={styles.sosWrapper}>
          <LinearGradient colors={["#FFF3E0", "#FFECB3"]} style={styles.sosOuterCircle}>
            <LinearGradient colors={["#FFE0B2", "#FFCC80"]} style={styles.sosInnerCircle}>
              <Text style={styles.sosText}>SOS</Text>
            </LinearGradient>
          </LinearGradient>
        </View>

        <Text style={styles.description}>
          After pressing the SOS button, we will contact the nearest hospital,
          police station to your current location
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  helpIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  helpText: {
    fontSize: 14,
    color: '#F57F17',
    marginRight: 4,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sosWrapper: {
    marginBottom: 30,
  },
  sosOuterCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  sosInnerCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sosText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default EmergencyScreen;
