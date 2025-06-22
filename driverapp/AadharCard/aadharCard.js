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

const AadharCaptureScreen = () => {
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
        <Text style={styles.screenTitle}>Capture a clear photo of your <Text style={styles.boldText}>Aadhar card</Text></Text>

        {/* Aadhar Card Image */}
        <View style={styles.aadharCardContainer}>
          <Image 
            source={require('assets/aadhar.png')} 
            style={styles.aadharCardImage}
            resizeMode="contain"
          />
        </View>

        {/* Additional Information */}
        <Text style={styles.explanationText}>
          By sharing your Aadhar details, you confirm that you are doing so willingly. You also agree that Cabit can share your Aadhar information with the relevant government authorities for the stated purposes.
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
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  aadharCardContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  aadharCardImage: {
    width: '90%',
    height: 100,
  },
  explanationText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  takePhotoContainer: {
    alignItems: 'center',
    marginTop: 40,
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

export default AadharCaptureScreen;

