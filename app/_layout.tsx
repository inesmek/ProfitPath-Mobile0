
/*import Index from "./index";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator<RootStackParamList>();

export default function AppLayout() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Index}
          options={{ headerShown: false }} // Custom header logic
        />
        
      </Stack.Navigator>
  );
}
// types/navigation.d.ts
export type RootStackParamList = {
  Home: undefined;
  AddTransaction: undefined; // Add params here if needed, e.g., { id: string }
};
import { Stack } from "expo-router";
const RootLayout = () =>{
return (
<Stack>
<Stack.Screen name="Home" />
</Stack>
);
};
export default RootLayout;*/
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Add_transactions" options={{ title: "Add Transaction" ,headerShown: false}} />
      <Stack.Screen name="Check_expenses" options={{ title: "Expenses" ,headerShown: false}} />
      <Stack.Screen name="Check_incomes" options={{ title: "Incomes" ,headerShown: false}} />
      <Stack.Screen name="Savings" options={{ headerShown: false}} />
      <Stack.Screen name="Investments" options={{ title: "Investments" ,headerShown: false}} />
      <Stack.Screen name="enter-amount" options={{ title: "Enter Amount" ,headerShown: false}} />
      <Stack.Screen name="date" options={{ title: "Date" ,headerShown: false}} />
      <Stack.Screen name="select-category" options={{ title: "Select category" ,headerShown: false}} />
      <Stack.Screen name="Add_savings" options={{ title: "Add savings" ,headerShown: false}} />
    </Stack>
  );
}