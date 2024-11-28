import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Stack } from 'expo-router';
import { PieChart, LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useRouter  } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;

export default function CheckExpenses() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };

  const pieData = [
    {
      name: 'Family',
      population: 30,
      color: '#00B8D9',
      legendFontColor: '#7F7F7F',
    },
    {
      name: 'Food & Shopping',
      population: 45,
      color: '#36B37E',
      legendFontColor: '#7F7F7F',
    },
    {
      name: 'Bills & Utilities',
      population: 25,
      color: '#0052CC',
      legendFontColor: '#7F7F7F',
    },
  ];

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 84, 204, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (<>
    <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={28} color="#1a1a1a" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Check Expenses</Text>
      </View>
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: 'Check Expenses',
          headerStyle: { backgroundColor: '#fff' },
          headerTitleStyle: { color: '#000' },
        }} 
      />
      
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Expenses Per Type</Text>
        <PieChart
          data={pieData}
          width={screenWidth -70}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Expenses Over Time</Text>
        <LineChart
          data={lineData}
          width={screenWidth - 80}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </View>
    </>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    
  },
  chartContainer: {
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    flex: 1,
  },
  backButton: {
    padding: 12,
    marginRight: 12,
  },
}); 