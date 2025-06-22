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

const RCCaptureScreen = () => {
  const [vehicleRegNumber, setVehicleRegNumber] = useState('');

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
            <Image 
              source={require('assets/icons8-help-48.png')} 
              style={styles.questionMarkIcon} 
              resizeMode="contain"
            />
            <Text style={styles.helpText}>Help</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.contentWrapper}>
        <Text style={styles.screenTitle}><Text style={styles.boldText}>Let's get your <Text style={styles.rcText}>Registration Certificate (RC)</Text>{' '}</Text></Text>
        
        <Text style={styles.subtitleText}>
          Enter your license plate number, and we'll fetch the necessary details from the Vahan and Sarathi portal of MoRTH, or you can upload your Registration Certificate (RC) instead.
        </Text>

        {/* Vehicle Registration Number Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Vehicle registration number</Text>
          <TextInput
            style={styles.input}
            value={vehicleRegNumber}
            onChangeText={setVehicleRegNumber}
            placeholder="VC9552 UP64"
            placeholderTextColor="#999"
          />
        </View>

        {/* Upload Document Link */}
        <TouchableOpacity style={styles.uploadLinkContainer}>
          <Text style={styles.uploadLinkText}>Upload document instead</Text>
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
    fontSize: 14,
  },
  contentWrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  screenTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  rcText: {
    color: '#FFC107',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
  },
  uploadLinkContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  uploadLinkText: {
    color: '#000000',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  takePhotoContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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

export default RCCaptureScreen;// JavaScript file created
