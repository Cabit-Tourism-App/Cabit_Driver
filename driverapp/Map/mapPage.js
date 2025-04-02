// JavaScript file created
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 26.8467,
          longitude: 80.9462,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      />
      
      {/* Top Section */}
      <View style={styles.topBar}>
        <Text style={styles.earnings}>Today's Earnings : 30,000</Text>
      </View>

      {/* Driving / Resting Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleText}>Driving</Text>
        <Switch value={false} />
        <Text style={styles.toggleText}>Resting</Text>
      </View>

      {/* Ride Request Card */}
      <View style={styles.rideRequestCard}>
        <View style={styles.driverInfo}>
          <Image source={{ uri: 'https://placekitten.com/100/100' }} style={styles.avatar} />
          <Text style={styles.driverName}>Mr. Bear</Text>
          <Text style={styles.rating}>★★★★★</Text>
          <Text style={styles.distance}>14 kms (25 min)</Text>
        </View>
        <Text style={styles.locationTitle}>Engineering College</Text>
        <Text style={styles.locationDetail}>Institute of Engineering and Technology, Lucknow, 226021</Text>
        <Text style={styles.locationTitle}>Vrindavan Colony</Text>
        <Text style={styles.locationDetail}>Near Lulu Mall, Lucknow, 226006</Text>
        
        {/* Payment and Buttons */}
        <Text style={styles.payment}>Online Pay ₹120</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.acceptButton}><Text style={styles.buttonText}>Accept Ride</Text></TouchableOpacity>
          <TouchableOpacity style={styles.declineButton}><Text style={styles.buttonText}>Decline</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  topBar: { padding: 10, backgroundColor: '#FFD700' },
  earnings: { fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  toggleContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10 },
  toggleText: { fontSize: 16, fontWeight: 'bold', marginHorizontal: 5 },
  rideRequestCard: { position: 'absolute', bottom: 20, left: 10, right: 10, backgroundColor: 'white', padding: 15, borderRadius: 10, elevation: 5 },
  driverInfo: { alignItems: 'center', marginBottom: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  driverName: { fontSize: 18, fontWeight: 'bold' },
  rating: { fontSize: 16, color: 'gold' },
  distance: { fontSize: 14, color: 'gray' },
  locationTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  locationDetail: { fontSize: 14, color: 'gray' },
  payment: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginVertical: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  acceptButton: { backgroundColor: '#FFD700', padding: 10, borderRadius: 5, flex: 1, marginRight: 5 },
  declineButton: { backgroundColor: 'red', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 },
  buttonText: { textAlign: 'center', fontWeight: 'bold', color: 'white' },
});

export default RideRequestScreen;
