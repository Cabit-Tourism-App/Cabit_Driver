import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

const EmpowerWomenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      
      <View style={styles.contentContainer}>
        {/* GIF container */}
        <View style={styles.gifContainer}>
          <Image
            // Method 1: Using a local GIF (recommended for production)
            source={require('assets/drive3.gif')}
            
            // Method 2: If testing, you can use a network URL temporarily
            // source={{uri: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExamI2dDhjZDRhMHdid2NjOXdlbm9jcWZqcTF1c3BvbmZ3MzB3czl3bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JTjiT1dvFdSpi/giphy.gif'}}
            
            style={styles.gif}
            resizeMode="contain"
          />
        </View>
        
        {/* Text content */}
        <View style={styles.textContainer}>
          <Text style={styles.titleFirst}>Drive Safe.</Text>
          <Text style={styles.titleSecond}>Empower Women.</Text>
          
          <Text style={styles.description}>
            Be a part of safer rides for women—support women-preferred bookings and contribute to a secure travel experience.
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
    paddingHorizontal: 24,
  },
  gifContainer: {
    width: width * 0.85,
    height: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  gif: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: height * 0.08,
  },
  titleFirst: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 36,
  },
  titleSecond: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 36,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
});

export default EmpowerWomenScreen;
