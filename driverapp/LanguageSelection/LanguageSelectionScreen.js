import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar, 
  Image,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo

const LanguageScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const languages = ['English', 'Español', 'Français', 'हिन्दी', '中文', 'العربية'];
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setDropdownOpen(false);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFDA5B" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>Cabit</Text>
          <Image 
            source={require('assets/icon.png')} 
            style={styles.logoIcon}
          />
        </View>
        
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>Help</Text>
          <View style={styles.helpIcon}>
            <Text style={styles.helpIconText}>?</Text>
          </View>
        </View>
      </View>
      
      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Select your language</Text>
        
        <Text style={styles.subtitle}>
          You can also change your language in the Settings.
        </Text>
        
        {/* Language Selection */}
        <View style={styles.languageSection}>
          <Text style={styles.languageLabel}>Language</Text>

          <TouchableOpacity 
            style={[
              styles.dropdown,
              {
                borderBottomRightRadius: dropdownOpen ? 0 : 8,
                borderBottomLeftRadius: dropdownOpen ? 0 : 8,
                marginBottom: dropdownOpen ? 0 : 4
              }
            ]}
            onPress={toggleDropdown}
            activeOpacity={0.9}
          >
            <Text style={styles.dropdownText}>{selectedLanguage}</Text>
            <Ionicons 
              name={dropdownOpen ? "chevron-up" : "chevron-down"} 
              size={24} 
              color="black" 
            />
          </TouchableOpacity>
          
          {dropdownOpen && (
            <View style={styles.dropdownMenu}>
              {languages.map((language, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.dropdownItem,
                    selectedLanguage === language && styles.dropdownItemSelected
                  ]}
                  onPress={() => selectLanguage(language)}
                >
                  <Text 
                    style={[
                      styles.dropdownItemText,
                      selectedLanguage === language && styles.dropdownItemTextSelected
                    ]}
                  >
                    {language}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
      
      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('Home')}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDA5B',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 4,
  },
  logoIcon: {
    width: 16,
    height: 16,
    marginTop: -6,
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  helpText: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 6,
  },
  helpIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFDA5B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpIconText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 30,
  },
  languageSection: {
    marginTop: 10,
  },
  languageLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFDA5B',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: '500',
  },
  dropdownMenu: {
    backgroundColor: 'white',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
  dropdownItemSelected: {
    backgroundColor: '#fff9e6',
  },
  dropdownItemText: {
    fontSize: 16,
  },
  dropdownItemTextSelected: {
    fontWeight: '500',
    color: '#FFBA0A',
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    backgroundColor: '#f8f8f8',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 5,
  },
  continueButton: {
    backgroundColor: '#FFDA5B',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#FFBA0A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});

export default LanguageScreen;
