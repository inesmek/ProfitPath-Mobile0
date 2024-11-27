/*import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SavingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Transactions Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});*/
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';

type TransactionType = 'Income' | 'Expense';
type CategoryType = 'Select Category' | string;

const AddTransactionScreen: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<CategoryType>('Select Category');
  const [note, setNote] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [transactionType, setTransactionType] = useState<TransactionType>('Income');
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    if (params?.amount) {
      const amountStr = Array.isArray(params.amount) ? params.amount[0] : params.amount;
      const formattedAmount = parseFloat(amountStr).toFixed(2);
      setAmount(formattedAmount);
    }
    if (params?.categoryName) {
      const categoryStr = Array.isArray(params.categoryName) 
        ? params.categoryName[0] 
        : params.categoryName;
      setCategory(categoryStr as CategoryType);
    }
    if (params?.selectedDate) {
      const dateStr = Array.isArray(params.selectedDate) 
        ? params.selectedDate[0] 
        : params.selectedDate;
      
      try {
        const newDate = new Date(dateStr);
        if (!isNaN(newDate.getTime())) {
          setDate(newDate);
        }
      } catch (error) {
        console.warn('Invalid date format:', error);
      }
    }
  }, [params]);

  const handleSave = () => {
    // Handle save logic here
    console.log({ amount, category, note, date, transactionType });
  };

  const onDateChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const handleCategoryPress = () => {
    router.push("./select-category");
  };

  const handleAmountPress = () => {
    router.push('./enter-amount');
  };

  const handleDatePress = () => {
    router.push('./date');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add Transactions</Text>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          onPress={() => setTransactionType('Income')}
          style={[styles.toggleButton, transactionType === 'Income' && styles.activeButton]}
        >
          <Text style={[styles.toggleText, transactionType === 'Income' && styles.activeText]}>
            Income
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTransactionType('Expense')}
          style={[styles.toggleButton, transactionType === 'Expense' && styles.activeButton]}
        >
          <Text style={[styles.toggleText, transactionType === 'Expense' && styles.activeText]}>
            Expense
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TouchableOpacity 
          style={styles.inputWrapper}
          onPress={handleAmountPress}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="cash-outline" size={24} color="#666" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.inputLabel}>Enter Amount</Text>
            <Text style={[styles.amountText, !amount && styles.placeholderText]}>
              {amount ? `$${amount}` : 'Enter Amount'}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.inputWrapper}
          onPress={handleCategoryPress}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="grid-outline" size={24} color="#666" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.inputLabel}>Select Category</Text>
            <Text style={[styles.valueText, !category && styles.placeholderText]}>
              {category === 'Select Category' ? 'Select Category' : category}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.inputWrapper}>
          <View style={styles.iconContainer}>
            <Ionicons name="create-outline" size={24} color="#666" />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="Write Note"
            value={note}
            onChangeText={setNote}
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity 
          style={styles.inputWrapper}
          onPress={handleDatePress}
        >
          <View style={styles.iconContainer}>
            <Ionicons name="calendar-outline" size={24} color="#666" />
          </View>
          <View style={styles.inputContent}>
            <Text style={styles.inputLabel}>Date</Text>
            <Text style={styles.valueText}>
              {date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </Text>
          </View>
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
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  saveButton: {
    color: '#007AFF',
    fontSize: 18,
    fontWeight: '500',
  },
  toggleContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
    marginTop: 10,
  },
  toggleButton: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  toggleText: {
    fontWeight: '500',
    fontSize: 18,
    color: '#666',
  },
  activeText: {
    color: '#fff',
  },
  inputContainer: {
    padding: 20,
    gap: 24,
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    height: 85,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    alignItems: 'center',
  },
  inputContent: {
    flex: 1,
    marginLeft: 16,
  },
  inputLabel: {
    color: '#666',
    fontSize: 18,
  },
  amountText: {
    fontSize: 20,
    color: '#000',
    marginTop: 6,
  },
  textInput: {
    flex: 1,
    marginLeft: 16,
    fontSize: 18,
    color: '#000',
  },
  valueText: {
    fontSize: 18,
    color: '#000',
    marginTop: 4,
  },
  placeholderText: {
    color: '#999',
  },
});

export default AddTransactionScreen;