// JavaScript file created
import React from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  StatusBar,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfilePhotoCaptureScreen = () => {
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
        <Text style={styles.screenTitle}>Capture your <Text style={styles.boldText}>profile picture</Text></Text>
        
        <Text style={styles.explanationText}>
          Cabbit has system to verify your profile photo. Once submitted, your profile photo can only be changed under specific situations.
        </Text>

        {/* Guidelines */}
        <View style={styles.guidelinesContainer}>
          <Text style={styles.guidelineItem}>1. Face the camera with clear eyes and mouth.</Text>
          <Text style={styles.guidelineItem}>2. Use good lighting, no glare, and ensure sharp focus</Text>
          <Text style={styles.guidelineItem}>3. No screen photos, filters, or edits</Text>
        </View>

        {/* Profile Photo Placeholder */}
        <TouchableOpacity style={styles.photoPlaceholderContainer}>
          <View style={styles.photoPseudoContainer}>
            <Ionicons name="camera" size={100} color="black" />
          </View>
        </TouchableOpacity>

        {/* Additional Information */}
        <Text style={styles.additionalInfoText}>
          Team will confirm your photo is live and taken in real-time, while Cabbit will check for duplicates across accounts. Learn more.
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
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  explanationText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  guidelinesContainer: {
    marginBottom: 20,
  },
  guidelineItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
  },
  photoPlaceholderContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoPseudoContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#FFC700',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  additionalInfoText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
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

export default ProfilePhotoCaptureScreen;
