// components/BalanceCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  balance: number; // The account balance to display
};

export default function BalanceCard({ balance }: Props) {
  return ( // Add the return statement
    <View style={styles.balanceContainer}>
      <Text style={styles.balanceTitle}>Account Balance</Text>
      <Text style={styles.balanceAmount}>
        ${balance.toLocaleString()} {/* Format balance with commas */}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  balanceContainer: {
    backgroundColor: '#0066cc', // Green background color
    borderRadius: 10, // Rounded corners
    padding: 16, // Padding inside the card
    alignItems: 'center', // Centers child elements horizontally
    margin: 16, // Margin around the card
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  balanceTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center', // Centers the text
  },
  balanceAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center', // Centers the text
  },
});
