import React from 'react';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/FontAwesome';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding-left: 15px;
    margin-top: 15px;
    border-bottom-width: 2px;
    border-color: #ccc;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #e7ab3c;
    margin-left: 10px;
`;

export default({icon, placeholder, value, onChangeText, password}) => {
    return(
        <InputArea>
            <Icon name={icon} 
                size={24}
                color="#555"
            />
            <Input 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    )
}