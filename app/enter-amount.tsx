import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const EnterAmountScreen = () => {
  const [amount, setAmount] = useState('00.00');
  const router = useRouter();

  const handleNumberPress = (num: string) => {
    if (amount === '00.00') {
      setAmount(num);
    } else {
      setAmount(prev => {
        const newAmount = prev.replace('.', '') + num;
        return (parseInt(newAmount) / 100).toFixed(2);
      });
    }
  };

  const handleDelete = () => {
    setAmount(prev => {
      if (prev.length <= 1 || prev === '00.00') {
        return '00.00';
      }
      const newAmount = prev.replace('.', '').slice(0, -1);
      return (parseInt(newAmount) / 100).toFixed(2);
    });
  };

  const handleAddAmount = () => {
    router.replace({
      pathname: "/Add_transactions",
      params: { amount }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Enter Amount</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.amountContainer}>
        <Text style={styles.currencySymbol}>$</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddAmount}>
        <Text style={styles.addButtonText}>Add an amount</Text>
      </TouchableOpacity>

      <View style={styles.keypad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <TouchableOpacity
            key={num}
            style={styles.key}
            onPress={() => handleNumberPress(num.toString())}
          >
            <Text style={styles.keyText}>{num}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.key} onPress={() => handleNumberPress('0')}>
          <Text style={styles.keyText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.key} onPress={handleDelete}>
          <Ionicons name="backspace-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  currencySymbol: {
    fontSize: 40,
    color: '#666',
    marginRight: 4,
  },
  amount: {
    fontSize: 40,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#007AFF',
    margin: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    justifyContent: 'space-between',
    marginTop: 'auto',
  },
  key: {
    width: '32%',
    aspectRatio: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  keyText: {
    fontSize: 24,
    color: '#333',
  },
});

export default EnterAmountScreen;