import React, {useContext, useEffect, useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { CartContext } from '../contexts/CartContext';
import { useNavigation } from '@react-navigation/native';

const TabArea = styled.View`
    height: 60px;
    background-color: #ffffff;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items: center;
    border-top-color: #000000;
`;

const DivCountCart = styled.View`
    background-color: #e7ab3c;
    color: #000;
    height: 20px;
    width: 20px;
    border-radius: 20px;
    position: absolute;
    z-index: 2;
    top: 7px;
    left: 65px;
    border: .5px solid #000;
    flex-direction: row;
    justify-content:center;
    align-items:center;
    line-height: 20px;
`;
const CountCart = styled.Text``;

const Text = styled.Text`
    font-size: 11px;
    color: #555;
`;


export default ({state, navigation}) => {

    const { state: cartState, dispatch: cartDispausertch } = useContext(CartContext);
    const [isLogged, setIsLogged] = useState(false);
    const nav = useNavigation();
  
    const goTo = (screenName) => {

        if(screenName == "User") {
            if(!isLogged){
                nav.navigate('Login')
                return;
            }
        }

        navigation.navigate(screenName);

    }

    return (
        <TabArea>
            <TabItem onPress={()=>goTo('Home')}  
                style={{borderTopWidth: state.index === 0 ? 1: 0.5}} 
            > 
                <Icon
                    name="home"
                    color="#444444"
                    size={24}
                    style={{opacity: state.index === 0 ? 1: 0.5}}
                />
              <Text  style={{opacity: state.index === 0 ? 1: 0.5}}>Home</Text>
            </TabItem>

            <TabItem onPress={() => goTo('Cart')}  style={{borderTopWidth: state.index === 1 ? 1: 0.5}}>
                
                <DivCountCart>
                    <CountCart>{cartState.countCart}</CountCart>
                </DivCountCart>
                
                <Icon
                    name="shopping-cart"
                    color="#444444"
                    size={24}
                    style={{opacity: state.index === 1 ? 1: 0.5}}
                />
               <Text  style={{opacity: state.index === 0 ? 1: 0.5}}>Cart</Text>
            </TabItem>

            <TabItem onPress={() => goTo('User')}  style={{borderTopWidth: state.index === 2 ? 1: 0.5}}>

                {
                    isLogged == true ?
                    <Icon
                    name="user"
                    color="#e7ab3c"
                    size={24}
                    style={{opacity: state.index === 2 ? 1: 0.5}} 
                    />
                    :
                    <Icon
                    name="user"
                    color="#444444"
                    size={24}
                    style={{opacity: state.index === 2 ? 1: 0.5}}
                    />
                
                }

                
                 <Text  style={{opacity: state.index === 0 ? 1: 0.5}}>User</Text>
            </TabItem>

        </TabArea>
    )


}