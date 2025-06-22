import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView } from 'react-native';

const { width, height } = Dimensions.get('window');

const FreedomToDriveScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* GIF animation from assets folder */}
        <View style={styles.gifContainer}>
          <Image
            source={require('assets/drive2.gif')}
            style={styles.gif}
            resizeMode="contain"
          />
        </View>
        
        {/* Text content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Freedom to Drive</Text>
          <Text style={styles.description}>
            Work on your own terms—choose your schedule, accept rides when you want, and enjoy complete flexibility.
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
    paddingBottom: height * 0.1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
});

export default FreedomToDriveScreen;
