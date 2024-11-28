import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { useRouter  } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');


export default function Savings() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
  
  // Calculate progress percentage (150,000 / 5,000,000)
  const progressPercentage = (150000 / 5000000) * 100;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Savings</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.mainCard}>
          <View style={styles.goalInfo}>
            <Text style={styles.goalLabel}>Saving Goal</Text>
            <Text style={styles.goalAmount}>$5,000,000</Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progressPercentage}%` }]} />
            </View>
            <Text style={styles.progressText}>{progressPercentage.toFixed(1)}% achieved</Text>
          </View>

          <View style={styles.currentSavings}>
            <View style={styles.savingsInfo}>
              <Text style={styles.savingsLabel}>Current Savings</Text>
              <Text style={styles.savingsAmount}>$150,000</Text>
            </View>
            <View style={styles.remainingInfo}>
              <Text style={styles.remainingLabel}>Remaining</Text>
              <Text style={styles.remainingAmount}>$850,000</Text>
            </View>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="trending-up" size={24} color="#4CAF50" />
            <Text style={styles.statAmount}>+$2,500</Text>
            <Text style={styles.statLabel}>This Month</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="calendar" size={24} color="#2196F3" />
            <Text style={styles.statAmount}>$12,500</Text>
            <Text style={styles.statLabel}>Last Month</Text>
          </View>
        </View>

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => router.push('/Add_savings')}
        >
          <Ionicons name="add-circle-outline" size={24} color="white" />
          <Text style={styles.addButtonText}>Add Savings</Text>
        </TouchableOpacity>
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
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  mainCard: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  goalInfo: {
    marginBottom: 20,
  },
  goalLabel: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  goalAmount: {
    fontSize: 36,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  progressContainer: {
    marginBottom: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#0066ff',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
  currentSavings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  savingsInfo: {
    flex: 1,
  },
  savingsLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  savingsAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0066ff',
  },
  remainingInfo: {
    flex: 1,
    alignItems: 'flex-end',
  },
  remainingLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  remainingAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    width: (width - 52) / 2,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a1a1a',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#0066ff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    shadowColor: '#0066ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  backButton: {
    padding: 12,
    marginRight: 12,
  },
}); 