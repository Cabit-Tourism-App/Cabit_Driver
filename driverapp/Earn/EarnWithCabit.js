import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const EarnScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#FFF4C2" barStyle="dark-content" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>Cabit</Text>
            <View style={styles.logoCircle} />
          </View>
          
          <TouchableOpacity style={styles.helpBadge}>
            <Text style={styles.helpText}>Help</Text>
            <View style={styles.helpCircle}>
              <Text style={styles.helpCircleText}>?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Title Section */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleMain}>Earn <Text style={styles.titleHighlight}>With Cabit</Text></Text>
            <Text style={styles.subtitle}>Decide when, where, and how you want to earn.</Text>
          </View>
          
          {/* Name Card */}
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="person-outline" size={24} color="#FFBA0A" />
                <Text style={styles.cardHeaderText}>Your Name</Text>
              </View>
              <TextInput
                style={styles.cardInput}
                placeholder="Enter your full name"
                placeholderTextColor="#A0A0A0"
                value={name}
                onChangeText={setName}
              />
            </View>
          </View>
          
          {/* Location Card */}
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="location-outline" size={24} color="#FFBA0A" />
                <Text style={styles.cardHeaderText}>Your Location</Text>
              </View>
              <TextInput
                style={styles.cardInput}
                placeholder="Enter your current location"
                placeholderTextColor="#A0A0A0"
                value={location}
                onChangeText={setLocation}
              />
            </View>
          </View>
          
          {/* Referral Code Card */}
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="gift-outline" size={24} color="#FFBA0A" />
                <Text style={styles.cardHeaderText}>Referral Code</Text>
              </View>
              <TextInput
                style={styles.cardInput}
                placeholder="Enter referral code (optional)"
                placeholderTextColor="#A0A0A0"
                value={referralCode}
                onChangeText={setReferralCode}
              />
            </View>
          </View>
          
          {/* Terms and Conditions */}
          <TouchableOpacity 
            style={styles.termsContainer}
            onPress={() => setAgreedToTerms(!agreedToTerms)}
            activeOpacity={0.7}
          >
            <View style={styles.checkbox}>
              {agreedToTerms && (
                <Ionicons name="checkmark" size={20} color="#FFBA0A" />
              )}
            </View>
            <Text style={styles.termsText}>
              I agree to the Terms & Conditions
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
      
      {/* Continue Button with Gradient */}
      <View style={styles.footerContainer}>
        <TouchableOpacity 
          style={styles.continueButtonWrapper}
          disabled={!name || !location || !agreedToTerms}
          onPress={() => navigation.navigate('NextScreen')}
          activeOpacity={0.8}
        >
          <LinearGradient
            colors={['#FFDA5B', '#FFDA5B']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[
              styles.continueButton,
              (!name || !location || !agreedToTerms) && styles.continueButtonDisabled
            ]}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFDA5B',
    paddingBottom: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
  },
  logoCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFBA0A',
  },
  helpBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  helpText: {
    fontSize: 14,
    marginRight: 8,
    color: '#333',
  },
  helpCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFBA0A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpCircleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  titleContainer: {
    marginBottom: 30,
  },
  titleMain: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  titleHighlight: {
    color: '#FFBA0A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
    color: '#333',
  },
  cardInput: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#FFBA0A',
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  footerContainer: {
    paddingHorizontal: 25,
    paddingBottom: 25,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  continueButtonWrapper: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  continueButton: {
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonDisabled: {
    opacity: 0.5,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EarnScreen;
