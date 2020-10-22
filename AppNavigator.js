import React from "react";
import { SafeAreaView } from "react-navigation";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import TransactionHistory from "./src/screens/TransactionHistory";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import MeterScreen from "./src/screens/MeterScreen";
import SmartAssistant from "./src/screens/SmartAssistant";

const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const MeterStack = createStackNavigator();
const SmartStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator initialRouteName="Home">
        <HomeStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "ACCOUNT",
            headerStyle: {
              backgroundColor: "#771144",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
              alignSelf: "center",
            },
          }}
        />
      </HomeStack.Navigator>
    );
  }

  function HistoryStackScreen() {
    return (
      <HistoryStack.Navigator>
        <HistoryStack.Screen
          name="History"
          component={TransactionHistory}
          options={{
            title: "TRANSACTION HISTORY",
            headerStyle: {
              backgroundColor: "#771144",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
          }}
        />
      </HistoryStack.Navigator>
    );
  }

  function MeterStackScreen() {
    return (
      <MeterStack.Navigator>
        <MeterStack.Screen
          name="Meter"
          component={MeterScreen}
          options={{
            title: "METER",
            headerStyle: {
              backgroundColor: "#771144",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
              alignSelf: "center",
            },
          }}
        />
      </MeterStack.Navigator>
    );
  }

  function SmartAssistantStackScreen() {
    return (
      <SmartStack.Navigator>
        <SmartStack.Screen
          name="Smart Assistant"
          component={SmartAssistant}
          options={{
            title: "SMART ASSISTANT",
            headerStyle: {
              backgroundColor: "#771144",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
          }}
        />
      </SmartStack.Navigator>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Account") {
                iconName = focused ? "md-person" : "md-person";
              } else if (route.name === "History") {
                iconName = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Meter") {
                iconName = focused ? "md-speedometer" : "md-speedometer";
              } else if (route.name === "Smart Assistant") {
                iconName = focused ? "robot" : "robot";
              }

              return route.name === "Smart Assistant" ? (
                <FontAwesome5 name="robot" size={size} color={color} />
              ) : (
                <Ionicons name={iconName} size={size} color={color} />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: "#771144",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Account" component={HomeStackScreen} />
          <Tab.Screen name="Meter" component={MeterStackScreen} />
          <Tab.Screen name="History" component={HistoryStackScreen} />
          <Tab.Screen
            name="Smart Assistant"
            component={SmartAssistantStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F9F8F9",
  },
});

export default AppNavigator;
