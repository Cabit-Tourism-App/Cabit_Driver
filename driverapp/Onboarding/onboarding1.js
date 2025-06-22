import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const CabitEarnitScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      
      {/* Main content container */}
      <View style={styles.contentContainer}>
        {/* GIF animation container */}
        <View style={styles.gifContainer}>
          <Image
            source={require('assets/drive1.gif')}
            style={styles.gif}
            resizeMode="contain"
          />
        </View>
        
        {/* Text content - shifted upwards */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Cabit, Earnit</Text>
          <Text style={styles.description}>
            Earn up to ₹X/month with every ride—get paid with transparent fares, bonuses, incentives and much more.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  gifContainer: {
    width: width * 0.8,
    height: height * 0.4, // Reasonable size for the GIF
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40, // Adds space between GIF and text
  },
  gif: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: height * 0.1, // Pushes text up from the bottom
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'System',
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    fontFamily: 'System',
  },
});

export default CabitEarnitScreen;
