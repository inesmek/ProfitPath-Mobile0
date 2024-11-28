import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function AddSavings() {
  const router = useRouter();
  const { amount, date } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => router.push('/Savings')}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Savings</Text>
        <TouchableOpacity 
          onPress={() => router.push('/Savings')}
          style={styles.saveButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Savings Details</Text>
        
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <View style={styles.iconWrapper}>
              <Ionicons name="pencil-outline" size={20} color="#0066ff" />
            </View>
            <TextInput
              placeholder="Name Your Savings"
              style={styles.input}
              placeholderTextColor="#666"
            />
          </View>

          <TouchableOpacity 
            style={styles.inputContainer}
            onPress={() => router.push('./enter-amount')}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name="cash-outline" size={20} color="#0066ff" />
            </View>
            <Text style={[styles.input, { color: '#666' }]}>
              {amount ? `$${amount}` : 'Enter Amount'}
            </Text>
            <Text style={styles.amountText}>
              {amount ? `$${amount}` : '$00.00'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.inputContainer}
            onPress={() => router.push('./date')}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name="calendar-outline" size={20} color="#0066ff" />
            </View>
            <Text style={[styles.input, { color: '#666' }]}>
              {date || 'Select Date'}
            </Text>
          </TouchableOpacity>

          <View style={[styles.inputContainer, styles.noteContainer]}>
            <View style={[styles.iconWrapper, { alignSelf: 'flex-start', marginTop: 4 }]}>
              <Ionicons name="create-outline" size={20} color="#0066ff" />
            </View>
            <TextInput
              placeholder="Write Note"
              style={[styles.input, styles.noteInput]}
              multiline
              numberOfLines={4}
              placeholderTextColor="#666"
              textAlignVertical="top"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  saveButton: {
    backgroundColor: '#0066ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#e6f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1a1a1a',
  },
  amountText: {
    fontSize: 16,
    color: '#0066ff',
    fontWeight: '600',
    marginLeft: 8,
  },
  noteContainer: {
    marginTop: 4,
    alignItems: 'flex-start',
  },
  noteInput: {
    height: 100,
    paddingTop: 4,
  },
}); 