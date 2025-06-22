import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const EmergencyScreen1 = () => {
  return (
    <LinearGradient
      colors={['#FFE680', '#FFD54F']}
      style={styles.container}
    >
      {/* App Bar */}
      <SafeAreaView style={styles.appBar}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.appTitle}>Emergency</Text>
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
          <Ionicons name="help-circle" size={16} color="#fff" />
        </TouchableOpacity>
      </SafeAreaView>

      {/* Main Content */}
      <View style={styles.content}>
        {/* SOS Circle */}
        <LinearGradient colors={['#FFFFFF', '#FFF2A6']} style={styles.sosCircle}>
          <Text style={styles.sosText}>SOS</Text>
        </LinearGradient>

        {/* Description Text */}
        <Text style={styles.infoText}>
          Please standby, we are currently{"\n"}requesting for help.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 100,
    elevation: 2,
  },
  appTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  helpButton: {
    backgroundColor: '#FFA500',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
  },
  helpText: {
    color: '#fff',
    fontSize: 12,
    marginRight: 4,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sosCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  sosText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFA500',
  },
  infoText: {
    marginTop: 40,
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default EmergencyScreen1;
