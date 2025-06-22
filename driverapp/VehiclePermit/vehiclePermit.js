// JavaScript file created
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  StatusBar,
  Image,
  TextInput
} from 'react-native';

const VehiclePermitCaptureScreen = () => {
  const handleTakePhoto = () => {
    console.log('Take Photo pressed');
  };

  const handleContinue = () => {
    console.log('Continue pressed');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Cabit</Text>
        <TouchableOpacity>
          <View style={styles.helpWhiteContainer}>
            <Text style={styles.helpText}>Help</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.boldText}>
        <Text style={styles.screenTitle}>Capture a photo of your <Text style={styles.highlightText}>Vehicle Permit</Text></Text></Text>
        
        {/* Document Preview Area */}
        <View style={styles.documentPreview}></View>
        
        {/* Declaration Text */}
        <Text style={styles.declarationText}>
          If the vehicle owner's name on the documents is different from mine, I confirm that I have the owner's consent to drive this vehicle on the Cabit platform. This declaration serves as a No-Objection Certificate, relieving Cabit of any legal responsibilities or consequences.
        </Text>
        
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
  },
  helpText: {
    color: 'black',
    fontSize: 14,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  screenTitle: {
    fontSize: 24,
    textAlign: 'left',
    marginBottom: 20,
  },
  highlightText: {
    color: '#FFC107',
  },
  boldText: {
    fontWeight: 'bold',
  },
  documentPreview: {
    width: '100%',
    height: 200,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  declarationText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
    textAlign: 'left',
    lineHeight: 20,
  },
  takePhotoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  takePhotoButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
  },
  takePhotoButtonText: {
    color: 'white',
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

export default VehiclePermitCaptureScreen;
