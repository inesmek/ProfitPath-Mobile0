import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  amount: number; // The transaction amount
  category: string; // The category of the transaction
};

export default function TransactionItem({ amount, category }: Props) {
  return ( 
    <View style={styles.transactionContainer}>
      <View style={styles.amountContainer}>
        <Text style={styles.dollarSign}>$</Text>
        <Text style={styles.amount}>{amount > 0 ? `+${amount}` : amount}</Text>
      </View>
      <Text style={styles.category}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
  },
  amountContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  dollarSign: {
    fontSize: 16,
    color: '#333',
    marginRight: 4,
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  category: {
    fontSize: 16,
    color: '#0066cc',
    fontWeight: '500',
  },
});