import { StyleSheet, Text, View, TextInput, Pressable} from "react-native";
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Info from "./Screens/info";
import Graph from "./Screens/graph";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
 return(
  // <View>

  <NavigationContainer>
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if  (route.name === 'Settings') {
          iconName = focused ? 'ios-settings' : 'ios-settings-outline';
        } else if (route.name === 'Info') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={Home} 
    options={{
      headerTitle:false,
      headerShown:false
    }}
    />
        <Tab.Screen name="Info" component={Info} 
    options={{
      headerTitle:false,
      headerShown:false
    }}
    />
    <Tab.Screen name="Settings" component={Login} 
        options={{
          // tabBarBadge:3,
          headerShown:false
        }}
    />
  </Tab.Navigator>
</NavigationContainer>
// {/* <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//           name="Home"
//           component={Graph}
//           options={{title: 'Welcome'}}
//         />
//       {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
//       </Stack.Navigator>
//       </NavigationContainer> */}
// // </View>
 )
};