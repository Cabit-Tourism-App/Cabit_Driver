import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DocumentUploadedScreen = () => {
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

  const documentItems = [
    { key: 'drivingLicense', label: 'Driving License - Front' },
    { key: 'profilePhoto', label: 'Profile Photo' },
    { key: 'aadharCard', label: 'Aadhar Card' },
    { key: 'panCard', label: 'PAN Card' },
    { key: 'registrationCertificate', label: 'Registration Certificate (RC)' },
    { key: 'vehicleInsurance', label: 'Vehicle Insurance' },
    { key: 'vehiclePermit', label: 'Vehicle Permit' }
  ];

  const toggleDocument = (key) => {
    setSelectedDocuments(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const renderProgressIndicator = () => {
    return [...Array(7)].map((_, index) => {
      const progress = progressPercentage * 7;
      return (
        <View 
          key={index} 
          style={[
            styles.progressDot, 
            index < Math.floor(progress) ? styles.activeProgressDot : styles.inactiveProgressDot
          ]}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFC107" barStyle="dark-content" />
      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>Cabit</Text>
        <TouchableOpacity>
          <Icon name="help-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.signupText}>Signing up for</Text>
          <Text style={styles.locationText}>Lucknow • Rides</Text>
          <Text style={styles.welcomeTitle}>Welcome, Name</Text>
          <Text style={styles.subHeader}>
            Start your earnings process after document submission
          </Text>
        </View>

        <View style={styles.progressContainer}>
          {renderProgressIndicator()}
        </View>

        <View style={styles.documentsContainer}>
          {documentItems.map((item) => (
            <TouchableOpacity 
              key={item.key}
              style={styles.documentCard}
              onPress={() => toggleDocument(item.key)}
            >
              <Text style={styles.documentText}>{item.label}</Text>
              {selectedDocuments[item.key] ? (
                <Icon 
                  name="checkmark-circle" 
                  color="#4CAF50" 
                  size={24} 
                />
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.continueButtonContainer}>
        <TouchableOpacity 
          style={[
            styles.continueButton, 
            progressPercentage === 1 ? styles.activeButton : styles.disabledButton
          ]}
          disabled={progressPercentage !== 1}
        >
          <Text style={[
            styles.continueButtonText,
            progressPercentage === 1 ? styles.activeButtonText : styles.disabledButtonText
          ]}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  appHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 40 : 20,
    paddingBottom: 10,
    backgroundColor: '#FFC107',
    height: 50
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white'
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  headerContainer: {
    marginBottom: 25
  },
  signupText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#333',
    marginBottom: 10
  },
  subHeader: {
    fontSize: 16,
    color: '#666'
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25
  },
  progressDot: {
    height: 8,
    width: 40,
    borderRadius: 4
  },
  activeProgressDot: {
    backgroundColor: '#FFC107'
  },
  inactiveProgressDot: {
    backgroundColor: '#E0E0E0'
  },
  documentsContainer: {
    gap: 15
  },
  documentCard: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5
  },
  documentText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500'
  },
  continueButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5
  },
  continueButton: {
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  activeButton: {
    backgroundColor: '#FFC107'
  },
  disabledButton: {
    backgroundColor: '#E0E0E0'
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600'
  },
  activeButtonText: {
    color: 'white'
  },
  disabledButtonText: {
    color: '#888'
  }
});

export default DocumentUploadedScreen;
