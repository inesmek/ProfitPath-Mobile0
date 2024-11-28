import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type CategoryGroup = {
  title: string;
  items: {
    id: string;
    name: string;
    icon: string;
    color: string;
  }[];
};

const categories: CategoryGroup[] = [
  {
    title: 'Health & Fitness',
    items: [
      { id: 'doctor', name: 'Doctor', icon: 'medical-outline', color: '#FF6B6B' },
      { id: 'medicine', name: 'Medicine', icon: 'medkit-outline', color: '#4ECDC4' },
      { id: 'exercise', name: 'Exercise', icon: 'barbell-outline', color: '#45B7D1' },
    ],
  },
  {
    title: 'Food & Shopping',
    items: [
      { id: 'grocery', name: 'Grocery', icon: 'cart-outline', color: '#98FB98' },
      { id: 'coffee', name: 'Tea & Coffees', icon: 'cafe-outline', color: '#4169E1' },
      { id: 'restaurant', name: 'Restaurants', icon: 'restaurant-outline', color: '#FFD700' },
    ],
  },
  {
    title: 'Shopping',
    items: [
      { id: 'clothing', name: 'Clothings', icon: 'shirt-outline', color: '#FF69B4' },
      { id: 'footwear', name: 'Footwear', icon: 'footsteps-outline', color: '#4A90E2' },
      { id: 'gadgets', name: 'Gadgets', icon: 'phone-portrait-outline', color: '#50C878' },
      { id: 'electronics', name: 'Electronics', icon: 'laptop-outline', color: '#87CEEB' },
      { id: 'furniture', name: 'Furniture', icon: 'bed-outline', color: '#8B4513' },
      { id: 'vehicles', name: 'Vehicles', icon: 'car-outline', color: '#1E90FF' },
      { id: 'accessories', name: 'Accessories', icon: 'glasses-outline', color: '#FFD700' },
    ],
  },
  {
    title: 'Bills & Utilities',
    items: [
      { id: 'phone', name: 'Phone Bill', icon: 'call-outline', color: '#FF69B4' },
      { id: 'water', name: 'Water Bill', icon: 'water-outline', color: '#4A90E2' },
      { id: 'gas', name: 'Gas Bill', icon: 'flame-outline', color: '#FFB347' },
      { id: 'internet', name: 'Internet Bill', icon: 'wifi-outline', color: '#87CEEB' },
      { id: 'rentals', name: 'Rentals', icon: 'home-outline', color: '#98FB98' },
      { id: 'tv', name: 'TV Bill', icon: 'tv-outline', color: '#DDA0DD' },
      { id: 'electricity', name: 'Electricity Bill', icon: 'flash-outline', color: '#FFD700' },
    ],
  },
  {
    title: 'Family',
    items: [
      { id: 'pets', name: 'Pets', icon: 'paw-outline', color: '#FF9999' },
      { id: 'children', name: 'Children', icon: 'people-outline', color: '#87CEFA' },
      { id: 'gifts', name: 'Gifts', icon: 'gift-outline', color: '#FFB6C1' },
    ],
  },
];

const SelectCategoryScreen = () => {
  const router = useRouter();

  const handleCategorySelect = (categoryName: string) => {
    router.push({
      pathname: "/Add_transactions",
      params: { categoryName }
    });
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
        <Text style={styles.headerTitle}>Select Category</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.categoryList}>
        {categories.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.groupContainer}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            <View style={styles.itemsGrid}>
              {group.items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.categoryItem}
                  onPress={() => handleCategorySelect(item.name)}
                >
                  <View style={[styles.iconContainer, { backgroundColor: item.color + '15' }]}>
                    <Ionicons name={item.icon as any} size={24} color={item.color} />
                  </View>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
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
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  categoryList: {
    flex: 1,
  },
  groupContainer: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
  },
  groupTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginBottom: 16,
  },
  itemsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryItem: {
    alignItems: 'center',
    width: '28%',
  },
  iconContainer: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default SelectCategoryScreen; 