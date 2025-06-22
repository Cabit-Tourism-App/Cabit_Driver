import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Platform,
  StatusBar
} from 'react-native';

const ApplicationSummaryScreen = () => {
  // State to track checked documents
  const [checkedDocuments, setCheckedDocuments] = useState({
    'Driving License - Front': false,
    'Profile Photo': false,
    'Aadhar Card': false,
    'PAN Card': false,
    'Registration Certificate (RC)': false,
    'Vehicle Insurance': false,
    'Vehicle Permit': false
  });

  const handleContinue = () => {
    console.log('Continue pressed');
  };

  // Toggle checkbox for a specific document
  const toggleCheckbox = (documentName) => {
    setCheckedDocuments(prev => ({
      ...prev,
      [documentName]: !prev[documentName]
    }));
  };

  // Checkbox component with tick
  const CheckIcon = ({ isChecked }) => (
    <TouchableOpacity 
      style={[
        styles.checkBox, 
        isChecked.checked && styles.checkedCheckBox
      ]}
      onPress={() => toggleCheckbox(isChecked.documentName)}
    >
      {isChecked.checked && (
        <View style={styles.checkMark}>
          <Text style={styles.checkMarkText}>✓</Text>
        </View>
      )}
    </TouchableOpacity>
  );

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
        <Text style={styles.screenTitle}>Application <Text style={styles.highlightText}>Summary</Text></Text></Text>
        <Text style={styles.subtitleText}>Before submitting double-check all details for accuracy</Text>

        {/* Personal Details Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Name</Text>
            <Text style={styles.detailValue}>Virat</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Driver City</Text>
            <Text style={styles.detailValue}>Bangalore</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Registration number</Text>
            <Text style={styles.detailValue}>UP94VC9552</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Vehicle</Text>
            <Text style={styles.detailValue}>Sedan</Text>
          </View>
        </View>

        {/* Document Checklist Section */}
        <View style={styles.checklistContainer}>
          {Object.entries(checkedDocuments).map(([documentName, isChecked]) => (
            <View key={documentName} style={styles.checklistRow}>
                <Text style={styles.boldText}>
              <Text style={styles.checklistLabel}>{documentName}</Text></Text>
              <CheckIcon 
                isChecked={{ 
                  checked: isChecked, 
                  documentName: documentName 
                }} 
              />
            </View>
          ))}
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
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
    marginTop: 10,
    marginBottom: 10,
  },
  highlightText: {
    color: '#FFC107',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    color: '#666',
    fontSize: 14,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  checklistContainer: {
    marginBottom: 20,
  },
  checklistRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  checklistLabel: {
    fontSize: 14,
    color: '#333',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckBox: {
    backgroundColor: 'black',
  },
  checkMark: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkMarkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

export default ApplicationSummaryScreen;// JavaScript file created
