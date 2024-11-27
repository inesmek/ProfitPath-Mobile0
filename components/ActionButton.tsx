// components/ActionButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'; // Import necessary components and StyleSheet for styling

// Define the type for the props the component will accept
type Props = {
  title: string; // The text displayed on the button
  onPress: () => void; // The function to execute when the button is pressed
  variant?: 'primary' | 'secondary'; // Optional prop to define the button style (primary by default)
};

// Define the ActionButton functional component
export default function ActionButton({ 
  title, 
  onPress, 
  variant = 'primary' // Default variant is 'primary' if not specified
}: Props) {
  return (
    <TouchableOpacity 
      // Style the button dynamically based on the variant
      style={[
        styles.button, 
        variant === 'secondary' ? styles.secondaryButton : styles.primaryButton
      ]} 
      onPress={onPress} // Attach the onPress event handler
    >
      <Text 
        // Style the button text dynamically based on the variant
        style={[
          styles.buttonText,
          variant === 'secondary' ? styles.secondaryButtonText : styles.primaryButtonText
        ]}
      >
        {title} {/* Display the button title */}
      </Text>
    </TouchableOpacity>
  );
}

// Define the styles for the component
const styles = StyleSheet.create({
  button: {
    padding: 12, // Add padding inside the button for spacing
    borderRadius: 8, // Make the corners slightly rounded
    alignItems: 'center', // Center align content horizontally
    margin: 8, // Add margin around the button
    flex: 1, // Allow the button to grow and shrink within a layout
  },
  primaryButton: {
    backgroundColor: '#0066cc', // Set a blue background for the primary variant
  },
  secondaryButton: {
    backgroundColor: '#e6f0ff', // Set a light blue background for the secondary variant
  },
  buttonText: {
    fontSize: 16, // Set the font size
    fontWeight: '600', // Make the font slightly bold
  },
  primaryButtonText: {
    color: 'white', // White text for the primary variant
  },
  secondaryButtonText: {
    color: '#0066cc', // Blue text for the secondary variant
  },
});
