import React, { useEffect } from "react";
import Customicons from "./src/components/CustomIcon";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailScreen from "./src/screens/DetailScreen";
import PaymentScreen from "./src/screens/PaymentScreen";
import TabNavigator from "./src/navigators/TabNavigator";
import HomeScreen from "./src/screens/HomeScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import SplashScreen from "react-native-splash-screen";
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ animation: "slide_from_bottom" }}></Stack.Screen>
          <Stack.Screen
            name="Details"
            component={DetailScreen}
            options={{ animation: "slide_from_bottom" }}></Stack.Screen>
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ animation: "slide_from_bottom" }}></Stack.Screen>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ animation: "slide_from_bottom" }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
