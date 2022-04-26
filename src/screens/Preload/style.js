import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native';

export const Container = styled.SafeAreaView`
    background-color: #fff;
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const Text = styled.Text`
    color: #e7ab3c;
`;

export const Image = styled.Image`
    height: 105px;
`;