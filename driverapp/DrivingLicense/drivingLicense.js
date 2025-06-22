import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  StatusBar,
  Image
} from 'react-native';

// Import the question mark image (replace with your actual image path)
const questionMarkIcon = require('assets/icons8-help-48.png');

const LicenseEntryScreen = () => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleTakePhoto = () => {
    console.log('Take Photo pressed');
  };

  const handleContinue = () => {
    console.log('Continue pressed');
  };

  return (
    <View style={styles.container}>
      {/* Top Gradient Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Cabit</Text>
          <TouchableOpacity>
            <View style={styles.helpWhiteContainer}>
              <Image 
                source={questionMarkIcon} 
                style={styles.questionMarkIcon} 
                resizeMode="contain"
              />
              <Text style={styles.helpText}>Help</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleNormal}>Enter your</Text>
          <Text style={styles.titleTextBold}> license number</Text>
          <Text style={styles.titleTextNormal}>and</Text>
          <Text style={styles.titleTextBold}>date of birth</Text>
        </View>
        
        <View style={styles.placeholderContainer}>
          <Text style={styles.placeholderText}>We'll use this to verify your identity</Text>
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>License number</Text>
          <TextInput
            style={styles.input}
            value={licenseNumber}
            onChangeText={setLicenseNumber}
            placeholder="ABCC12342"
            placeholderTextColor="#888"
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Date of birth</Text>
          <TextInput
            style={styles.input}
            value={dateOfBirth}
            onChangeText={setDateOfBirth}
            placeholder="23/09/2005"
            placeholderTextColor="#888"
            keyboardType="numeric"
          />
        </View>
        
        <TouchableOpacity style={styles.uploadDocumentButton}>
          <Text style={styles.uploadDocumentText}>Upload document instead</Text>
        </TouchableOpacity>
        
        {/* Take Photo Container */}
        <View style={styles.takePhotoContainer}>
          <TouchableOpacity 
            style={styles.takePhotoButton} 
            onPress={handleTakePhoto}
          >
            <Text style={styles.takePhotoButtonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
        
        {/* Continue Button Container */}
        <View style={styles.continueButtonWrapper}>
          <TouchableOpacity 
            style={styles.continueButtonContainer}
            onPress={handleContinue}
          >
            <View style={styles.continueButtonGradient}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#FFC700',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  helpWhiteContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  questionMarkIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  helpText: {
    color: 'black',
    fontSize: 16,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  titleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 3,
  },
  titleTextNormal: {
    fontSize: 16,
    marginHorizontal: 3,
  },
  placeholderContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  placeholderText: {
    color: '#888',
    fontSize: 14,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    color: '#666',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  uploadDocumentButton: {
    alignSelf: 'center',
    marginVertical: 15,
  },
  uploadDocumentText: {
    color: 'black',
    fontSize: 16,
  },
  takePhotoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  takePhotoButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  takePhotoButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  continueButtonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  continueButtonContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 3,
  },
  continueButtonGradient: {
    backgroundColor: '#FFC700',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LicenseEntryScreen;
