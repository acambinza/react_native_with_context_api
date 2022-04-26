import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Cart from '../screens/Cart';
import User from '../screens/User';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator
        tabBar={props => <CustomTabBar { ...props} />}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="User" component={User} />
    </Tab.Navigator>
);