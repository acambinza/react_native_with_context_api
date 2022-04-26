import React, {useState, useEffect, useContext} from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Container, 
    Name,
    DivUserName,
    DivDetalhes,
    Div,
    Text
} from './style';


export default () => {
    
    useEffect(() => {
        console.log(' User Effect ')
    }, [])

    return (

        <Container>
            <DivUserName>
                <Name> Anselmo JC </Name>
            </DivUserName>

            <DivDetalhes>
                <Div>
                    <Icon 
                        name="user"
                        size={24}
                    />
                    <Text> Dados Pessoas </Text>
                </Div>
                <Div>
                    <Icon 
                        name="user"
                        size={24}
                    />
                    <Text> Registro de Compras </Text>
                </Div>
                <Div>
                    <Icon 
                        name="user"
                        size={24}
                    />
                    <Text> Sair </Text>
                </Div>
            </DivDetalhes>
        </Container>
    );

}