import React from 'react';

import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 50px;
    height: 60px;
    margin-top: 15px;
    border-bottom-width: 3px;
    border-color: #e7ab3c;

`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #e7ab3c;
    justify-content:center;
    align-items: center;
    text-align:center;
    font-size: 24px;
    color: #555;
`;

export default({value, onChangeText, password, placeholder}) => {

    return(
        <InputArea>
            <Input 
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={password}
                maxLength={1}
                keyboardType="numeric"
                placeholder={placeholder}
            />
        </InputArea>
    )
}