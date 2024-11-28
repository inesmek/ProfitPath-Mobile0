import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from 'react-native';
/*import Header from '@/components/Header';*/
import BalanceCard from '@/components/BalanceCard';
import TransactionItem from '@/components/TransactionItem';
import ActionButton from '@/components/ActionButton';
import { useRouter } from "expo-router";

const transactions = [
  { id: '1', amount: 1000, category: 'Salary' },
  { id: '2', amount: -150, category: 'Grocery' },
  { id: '3', amount: 200, category: 'Refunds' },
  { id: '4', amount: -500, category: 'Rentals' },
];

export default function HomeScreen() {
  const router = useRouter();

  // Navigation handlers
  const handleAddTransaction = () => {
    router.push("/Add_transactions"); 
  };

  const handleCheckExpenses = () => {
    router.push("/Check_expenses");
  };

  const handleCheckIncomes = () => {
    router.push("/Check_incomes");
  };

  const handleAddSaving = () => {
    router.push("/Savings");
  };

  const handleInvestments = () => {
    router.push("/Investments");
  };

  const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/*<Header />*/}
        <ScrollView showsVerticalScrollIndicator={false}>
          <BalanceCard balance={totalBalance} />
          
          {/* Transactions Section */}
          <View style={styles.transactionsContainer}>
            <Text style={styles.sectionTitle}>Latest Transactions</Text>
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                amount={transaction.amount}
                category={transaction.category}
                
              />
            ))}
          </View>

          {/* Action Buttons */}
          <View style={styles.buttonContainer}>
            <ActionButton 
              title="+ Add Transaction" 
              onPress={handleAddTransaction}
              variant="primary"
            />
          </View>

          <View style={styles.buttonRow}>
            <ActionButton 
              title="Check Expenses" 
              onPress={handleCheckExpenses}
              variant="secondary"
              
            />
            <ActionButton 
              title="Check   Incomes" 
              onPress={handleCheckIncomes}
              variant="primary"
              
            />
          </View>

          <View style={[styles.buttonRow, styles.lastButtonRow]}>
            <ActionButton 
              title="Savings" 
              onPress={handleAddSaving}
              variant="primary"
              
            />
            <ActionButton 
              title="Investments" 
              onPress={handleInvestments}
              variant="secondary"
              
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 50,
  },
  transactionsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#1A1A1A',
  },
  buttonContainer: {
    padding: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  lastButtonRow: {
    marginBottom: 24,
  },
  halfButton: {
    flex: 0.48, // Slightly less than 0.5 to add space between buttons
  },
}); 