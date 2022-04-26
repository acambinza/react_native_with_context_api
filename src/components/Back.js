import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import styled  from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';


const Container = styled.TouchableOpacity`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index:1;
`;

const Div = styled.View`
    flex-direction: row;
    align-items: center;
`;

export default () => {

    const navigation = useNavigation();

    return (
        <Container onPress={() => navigation.goBack()} >
            <Div>
                <Icon 
                    name="arrow-back-circle-outline" 
                    color="#e7ab3c" 
                    size={32}
                />
            </Div>
        </Container>
    )
}