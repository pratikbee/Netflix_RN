import React from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Splash from "./components/Splash.js";
import { Login } from "./components/Login.js";
import Register from "./components/Register.js";
import { Platform } from "react-native";
import HomeScreen from "./components/HomeScreen.js";
import Home from "./components/Home.js";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ViewMovie from "./components/ViewMovie.js";



const stack = createStackNavigator();
const tab = createBottomTabNavigator();
const App = () => {


  const BottomStackScreen = () => {
    return (
      <tab.Navigator
        
        screenOptions={{
          
          tabBarShowLabel:false,
          tabBarStyle: {flexDirection: 'row'},
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#5b5b5b',
          tabBarStyle: {
            backgroundColor: '#141414',
            borderTopWidth: 0,
            elevation: 0,
            shadowOffset: {
              width: 0,
              height: 0,
            },

            height: 60,
            paddingBottom: 10,
          },
        }}>
        <tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown:false,
            tabBarIcon: ({color}) => (
              <MaterialIcons
                name="home"
                size={24}
                color={color}
                style={{marginBottom: -10}}
              />
            ),
          }}
        />
        <tab.Screen
          name="Coming Soon"
          component={Home}
          options={{
            headerShown:false,
            tabBarIcon: ({color}) => (
              <MaterialIcons
                name="video-library"
                size={24}
                color={color}
                style={{marginBottom: -10}}
              />
            ),
          }}
        />
        <tab.Screen
          name="Downloads"
          component={Home}
          options={{
            headerShown:false,
            tabBarIcon: ({color}) => (
              <AntDesign
                name="download"
                size={24}
                color={color}
                style={{marginBottom: -10}}
              />
            ),
          }}
        />
      </tab.Navigator>
    );
  }

  const screenoptions = {
    headerShown: false,
    ...TransitionPresets.SlideFromRightIOS,

  }
  
  return (
    <NavigationContainer>
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }} /> */}
      <stack.Navigator
        screenOptions={screenoptions}
        initialRouteName="BottomScreen">
        <stack.Screen
          name="Splash"
          component={Splash}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
          }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
          }}
        />
        <stack.Screen
          name="Register"
          component={Register}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
          }}
        />
        <stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
          }}
        />
        <stack.Screen
          name="BottomScreen"
          component={BottomStackScreen}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
          }}
        />
        <stack.Screen
          name="ViewMovie"
          component={ViewMovie}
          options={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animationEnabled: true,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;