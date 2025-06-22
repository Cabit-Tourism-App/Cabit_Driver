import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView, 
  StatusBar,
  ScrollView,
  Platform,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const DocumentItem = ({ title, onPress }) => (
  <TouchableOpacity style={styles.documentCard} onPress={onPress}>
    <Text style={styles.documentTitle}>{title}</Text>
    <MaterialIcons name="keyboard-arrow-right" size={24} color="#D8950A" />
  </TouchableOpacity>
);

const DocumentScreen = () => {
  const [selectedDocuments, setSelectedDocuments] = useState({
    drivingLicense: false,
    profilePhoto: false,
    aadharCard: false,
    panCard: false,
    registrationCertificate: false,
    vehicleInsurance: false,
    vehiclePermit: false
  });

  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const selectedCount = Object.values(selectedDocuments).filter(Boolean).length;
    const totalDocuments = Object.keys(selectedDocuments).length;
    const progress = selectedCount / totalDocuments;
    setProgressPercentage(Math.round(progress * 100) / 100);
  }, [selectedDocuments]);

  const toggleDocument = (key) => {
    setSelectedDocuments(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const documentItems = [
    { key: 'drivingLicense', label: 'Driving License - Front' },
    { key: 'profilePhoto', label: 'Profile Photo' },
    { key: 'aadharCard', label: 'Aadhar Card' },
    { key: 'panCard', label: 'PAN Card' },
    { key: 'registrationCertificate', label: 'Registration Certificate (RC)' },
    { key: 'vehicleInsurance', label: 'Vehicle Insurance' },
    { key: 'vehiclePermit', label: 'Vehicle Permit' }
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFDE59" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>Cabit</Text>
          <MaterialIcons name="crop-free" size={20} color="#FFF" style={styles.logoIcon} />
        </View>
        
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>Help</Text>
          <View style={styles.helpIconContainer}>
            <Text style={styles.helpIcon}>?</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Location Info */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Signing up for</Text>
          <View style={styles.cityRideContainer}>
            <Text style={styles.cityText}>Lucknow</Text>
            <Text style={styles.dotSeparator}>•</Text>
            <Text style={styles.rideText}>Rides</Text>
            <Text style={styles.dotSeparator}>•</Text>
          </View>
        </View>
        
        {/* Welcome Message */}
        <Text style={styles.welcomeText}>Welcome, Name</Text>
        
        {/* Instructions */}
        <Text style={styles.instructionText}>
          Start your earnings process after document submission
        </Text>
        
        {/* Progress Steps */}
        <View style={styles.progressContainer}>
          {[...Array(7)].map((_, index) => (
            <View 
              key={index} 
              style={[
                styles.progressStep, 
                index === 0 ? styles.activeStep : styles.inactiveStep
              ]}
            />
          ))}
        </View>
        
        {/* Document List */}
        <View style={styles.documentsContainer}>
          {documentItems.map((item) => (
            <DocumentItem 
              key={item.key}
              title={item.label} 
              onPress={() => toggleDocument(item.key)} 
            />
          ))}
        </View>
      </ScrollView>
      
      {/* DigiLocker Button */}
      <View style={styles.digiLockerButtonContainer}>
        <TouchableOpacity style={styles.digiLockerButton}>
          <Text style={styles.digiLockerText}>Link From Digi-locker</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 40 : 16,
    paddingBottom: 10,
    backgroundColor: '#FFDE59',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoIcon: {
    marginLeft: 4,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
    marginRight: 4,
  },
  helpIconContainer: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIcon: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666666',
  },
  locationContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  locationText: {
    fontSize: 14,
    color: '#666666',
  },
  cityRideContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  dotSeparator: {
    fontSize: 16,
    color: '#666666',
    marginHorizontal: 8,
  },
  rideText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  instructionText: {
    fontSize: 15,
    color: '#444444',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  progressStep: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
  activeStep: {
    backgroundColor: '#FFDE59',
  },
  inactiveStep: {
    backgroundColor: '#E0E0E0',
  },
  documentsContainer: {
    paddingHorizontal: 16,
    gap: 15,
  },
  documentCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333333',
  },
  digiLockerButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  digiLockerButton: {
    backgroundColor: '#FFDE59',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  digiLockerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
});

export default DocumentScreen;
