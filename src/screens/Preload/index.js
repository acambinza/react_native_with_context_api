import React, {useEffect} from 'react';
import {Container, LoadingIcon, Text, Image} from './style';
import {useNavigation} from '@react-navigation/native';

let Logo = require('../../assets/logo/w.Logo.png');

export default () => {
    const navigation = useNavigation();

    useEffect( () => {
            setTimeout(()=> { 
                    navigation.reset({
                        routes: [{name: 'MainTab'}]
                    });
            },1000)
    },[])

    return (
        <Container>
            <Image source={Logo} />
            <LoadingIcon size="large" color="#e7ab3c"/>
        </Container>
    )
}