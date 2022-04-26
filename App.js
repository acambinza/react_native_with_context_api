import React from 'react';

import CartContextProvider from './src/contexts/CartContext';

import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import { CartContext } from './src/contexts/CartContext';

export default () => {
      return(
            <CartContextProvider>
                <NavigationContainer >
                    <MainStack />
                </NavigationContainer>
            </CartContextProvider>
      );
}
