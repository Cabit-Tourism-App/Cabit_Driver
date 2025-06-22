import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Car, HelpCircle } from 'lucide-react-native';

const VehicleSelectionScreen = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const VehicleCard = ({ 
    title, 
    description, 
    image, 
    onPress, 
    isSelected 
  }) => (
    <TouchableOpacity 
      onPress={onPress}
      style={[
        styles.cardContainer,
        isSelected && styles.selectedCard
      ]}
    >
      <LinearGradient
        colors={isSelected 
          ? ['#FFD700', '#FFA500'] 
          : ['#FFFFFF', '#F5F5F5']
        }
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.cardGradient}
      >
        <View style={styles.cardContent}>
          <View style={styles.textContainer}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDescription}>{description}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              source={image} 
              style={styles.vehicleImage}
              resizeMode="contain"
            />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle="dark-content" 
        backgroundColor="#FFC107" 
      />
      
      {/* Reduced Height Header */}
      <LinearGradient
        colors={['#FFC107', '#FFD54F']}
        style={styles.header}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <View style={styles.headerContent}>
          <Image 
            source={require('assets/logo.png')} 
            style={styles.logo} 
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.helpButton}>
            <View style={styles.helpButtonContainer}>
              <HelpCircle color="#FFFFFF" size={20} style={styles.helpIcon} />
              <Text style={styles.helpButtonText}>Help</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Scrollable Content */}
      <ScrollView 
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Ride With Cabit Heading */}
        <View style={styles.headingContainer}>
          <Car 
            color="#FFC107" 
            size={48} 
            style={styles.headingIcon} 
          />
          <Text style={styles.screenTitle}>
            <Text style={styles.rideText}>Ride</Text>{' '}
            <Text style={styles.withText}>With</Text>{' '}
            <Text style={styles.cabitText}>Cabit</Text>
          </Text>
        </View>

        {/* Subtitle */}
        <Text style={styles.subtitleText}>
          <Text style={styles.boldSubtitle}>Choose your vehicle</Text> 
        </Text>

        {/* Vehicle Cards */}
        <View style={styles.vehicleCardsContainer}>
          <VehicleCard 
            title="Commercial Car"
            description="You have a car to drive or have someone else to drive it."
            image={require('assets/v1.png')}
            onPress={() => setSelectedVehicle('commercial')}
            isSelected={selectedVehicle === 'commercial'}
          />
          
          <VehicleCard 
            title="Auto Rickshaw"
            description="You have a car to drive or have someone else to drive it."
            image={require('assets/v2.png')}
            onPress={() => setSelectedVehicle('rickshaw')}
            isSelected={selectedVehicle === 'rickshaw'}
          />
        </View>
      </ScrollView>

      {/* Static Bottom Container */}
      <LinearGradient
        colors={['#FFFFFF', '#F5F5F5']}
        style={styles.bottomContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <TouchableOpacity 
          style={[
            styles.continueButton,
            selectedVehicle && styles.continueButtonActive
          ]}
          disabled={!selectedVehicle}
        >
          <Text style={styles.continueButtonText}>
            CONTINUE
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 20,
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  logo: {
    width: 100,
    height: 50,
  },
  helpButton: {
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 20,
  },
  helpButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  helpIcon: {
    marginRight: 5,
  },
  helpButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  headingIcon: {
    marginRight: 15,
  },
  screenTitle: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  rideText: {
    color: '#000000',
  },
  withText: {
    color: '#FFC107',
  },
  cabitText: {
    color: '#000000',
  },
  subtitleText: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
  },
  boldSubtitle: {
    fontWeight: 'bold',
    color: '#000',
  },
  vehicleCardsContainer: {
    paddingHorizontal: 20,
    gap: 20,
  },
  cardContainer: {
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    marginBottom: 15,
  },
  selectedCard: {
    borderWidth: 2,
    borderColor: '#FFC107',
  },
  cardGradient: {
    borderRadius: 15,
    padding: 15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 2,
    paddingRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  vehicleImage: {
    width: 100,
    height: 70,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  continueButton: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  continueButtonActive: {
    backgroundColor: '#FFC107',
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 1.5,
  },
};

export default VehicleSelectionScreen;
