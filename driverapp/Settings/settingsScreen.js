import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { AntDesign, Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

const SettingsScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const settingsOptions = [
    {
      title: 'Language',
      icon: <MaterialIcons name="language" size={20} color="#000" />, 
    },
    {
      title: 'Payment Method',
      icon: <FontAwesome5 name="money-check-alt" size={18} color="#000" />,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.appbarTitle}>Settings</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <Text style={styles.helpText}>Help</Text>
          <Feather name="help-circle" size={16} color="#FFD600" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {settingsOptions.map((item, index) => (
          <LinearGradient
            key={index}
            colors={['#FFECB3', '#FFB300']}
            style={styles.card}
          >
            <TouchableOpacity onPress={() => toggleExpand(index)} style={styles.cardContent}>
              <View style={styles.cardIcon}>{item.icon}</View>
              <Text style={styles.cardText}>{item.title}</Text>
              <AntDesign
                name={expandedIndex === index ? 'up' : 'down'}
                size={18}
                color="#000"
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFAF0',
  },
  appbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  appbarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  helpIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF9C4',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 14,
  },
  helpText: {
    fontSize: 14,
    color: '#F9A825',
    marginRight: 4,
    fontWeight: '600',
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
    minHeight: height - 100,
  },
  card: {
    borderRadius: 16,
    marginBottom: 24,
    paddingVertical: 16,
    paddingHorizontal: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardIcon: {
    marginRight: 10,
  },
  cardText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default SettingsScreen;
