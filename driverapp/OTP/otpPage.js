// JavaScript file created
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const OTPScreen = () => {
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleOTPChange = (text, index) => {
    if (text.length > 1) return;
    let newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleOTPChange(text, index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  otpBox: {
    width: 50,
    height: 50,
    margin: 10,
    backgroundColor: '#FFD700',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
  },
});

export default OTPScreen;