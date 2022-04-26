import React, {createContext, useReducer} from 'react';
import {initialState, CartReducer} from '../reducers/CartReducer';

export const CartContext = createContext();
 
export default ({children}) => {

    const [state, dispatch] = useReducer(CartReducer, initialState);
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}