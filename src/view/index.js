import React, { useState } from "react";
import { View, Text, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./home";
import DetailProduct from "./detailProduct"
import { IMAGES } from "../images/images";
import Like from "./Like";
import Cart from "./cart";
import Profile from "./progfile";


const Index = () => {

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const TabBar = () => {
        return (
            <Tab.Navigator screenOptions={{ headerShown: false , tabBarShowLabel: false}}>
           <Tab.Screen name="Home" component={Home} options={{
               tabBarIcon: ({focused}) => (
                   <Image source={IMAGES.iconHome} style = {{
                       tintColor: focused ? '#000000' : '#D6D6D6'
                   }}></Image>
               )
            }}/>
           <Tab.Screen name="Like" component={Like} options={{
               tabBarIcon: ({focused}) => (
                   <Image source={IMAGES.iconHeart} style = {{
                       tintColor: focused ? '#000000' : '#D6D6D6'
                   }}></Image>
               )
            }}/>
           <Tab.Screen name="Cart" component={Cart} options={{
               tabBarIcon: ({focused}) => (
                   <Image source={IMAGES.iconCart} style = {{
                       tintColor: focused ? '#000000' : '#D6D6D6'
                   }}></Image>
               )
            }}/>
           <Tab.Screen name="Profile" component={Profile} options={{
               tabBarIcon: ({focused}) => (
                   <Image source={IMAGES.iconProfile} style = {{
                       tintColor: focused ? '#000000' : '#D6D6D6'
                   }}></Image>
               )
            }}/>
            
       </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name = "TabBar" component={TabBar}/>
                <Stack.Screen name = "Detail" component={DetailProduct}/>
                <Stack.Screen name = "Like" component={Like}/>
                <Stack.Screen name = "Cart" component={Cart}/>
                <Stack.Screen name = "Profile" component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
       
    );
}
export default Index;
