import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

function Home() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Home Screen</Text>
    </View>
  );
}

function Vitals() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Vitals Screen</Text>
    </View>
  );
}

function Resources() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Resources Screen</Text>
    </View>
  );
}

function CustomerCare() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome to Customer Care Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "#00ced1",
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Vitals"
          component={Vitals}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="activity" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Resources"
          component={Resources}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons name="stack" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Customer Care"
          component={CustomerCare}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="phone-call" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
