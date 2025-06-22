import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { height } = Dimensions.get('window');

const ProfileScreenD = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarCircle}>
              <FontAwesome5 name="user" size={32} color="#000" />
            </View>
            <Text style={styles.username}>HARSH ADITYA</Text>
          </View>
        </View>

        <View style={styles.cardSection}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="bar-chart" size={22} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>Performance</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Ionicons name="document-text-outline" size={22} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>Document</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="settings" size={22} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>Settings</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.sosCard]}>
            <FontAwesome5 name="shield-alt" size={22} color="red" style={styles.icon} />
            <Text style={styles.sosText}>SOS Emergency Call</Text>
            <Feather name="chevron-right" size={20} color="red" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="phone" size={22} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>Contact Us</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <MaterialIcons name="report-problem" size={22} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>Report app issue</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="log-out" size={22} color="#000" style={styles.icon} />
            <Text style={styles.cardText}>Exit Cabit App</Text>
            <Feather name="chevron-right" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDE7',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  profileSection: {
    backgroundColor: '#FFE082',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingVertical: 50,
    alignItems: 'center',
  },
  avatarContainer: {
    alignItems: 'center',
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E65100',
  },
  cardSection: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: -20,
  },
  card: {
    backgroundColor: '#FFECB3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 14,
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    marginRight: 12,
  },
  cardText: {
    flex: 1,
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  sosCard: {
    borderLeftWidth: 4,
    borderLeftColor: 'red',
  },
  sosText: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default ProfileScreenD;
