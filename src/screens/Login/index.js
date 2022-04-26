import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Back from '../../components/Back';
import {
    Container, 
    TextLogin,
    Text,
    DivLogin,
    DivInputs,
    DivCall,
    DivButton,
    ButtonCall
} from './style';

export default () => {

    const navigation = useNavigation();

    const [userField, setUserField] = useState('')
    const [passField, setPassField] = useState('');

    const entrar = () => {
        console.log('Login');
    }

    const callRegister = () => {
        navigation.navigate("Register");
    }

    return (
        <Container >
            <Back />
            <DivLogin>
                <TextLogin>Login</TextLogin>
            </DivLogin>
            <DivInputs>
                <Input 
                    icon="user"
                    placeholder="Usuario"
                    value={userField}
                    onChangeText={user => setUserField(user)}
                    password={false}
                />
                 <Input 
                    icon="lock"
                    placeholder="Password"
                    value={passField}
                    onChangeText={pass => setPassField(pass)}
                    password={true}
                />
            </DivInputs>
            <DivCall>
                <ButtonCall onPress={callRegister}>
                    <Text>Criar uma conta</Text>
                </ButtonCall>
            </DivCall>
            <DivButton>
               <Button name="Entrar" onPress={() => entrar()}/>
            </DivButton>
        </Container>
    );

}