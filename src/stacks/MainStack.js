import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Preload from '../screens/Preload';
import ProdutoSingle from '../screens/ProdutoSingle';

import Login from '../screens/Login';
import Register from '../screens/Register';
import Confirm from '../screens/Confirm';

import MainTab from './MainTab';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator 
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="ProdutoSingle" component={ProdutoSingle} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Confirm" component={Confirm} />
        
    </Stack.Navigator>
);