import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Back from '../../components/Back';

import {
    Container, 
    Scroll,
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

    const [userField, setUserField] = useState('');
    const [passField, setPassField] = useState('');
    const [passFieldRepetir, setPassFieldRepetir] = useState('');

    const registar = () => {
        console.log('registar');
    }

    const callLogin = () => {
        navigation.navigate("Login");
    }

    return (
        <Container >
          <Scroll >
            <Back />
            <DivLogin>
                <TextLogin>Registro</TextLogin>
            </DivLogin>
            <DivInputs>

                <Input 
                    icon="user"
                    placeholder="Nome Completo"
                    value={userField}
                    onChangeText={user => setUserField(user)}
                    password={false}
                    />

                <Input 
                    icon="user"
                    placeholder="Email"
                    value={userField}
                    onChangeText={user => setUserField(user)}
                    password={false}
                    />
                <Input 
                    icon="phone"
                    placeholder="Telefone"
                    value={userField}
                    onChangeText={user => setUserField(user)}
                    password={false}
                />

                <Input 
                    icon="user"
                    placeholder="N. BI"
                    value={userField}
                    onChangeText={user => setUserField(user)}
                    password={false}
                    />

                <Input 
                    icon="home"
                    placeholder="Morada"
                    value={userField}
                    onChangeText={user => setUserField(user)}
                    password={false}
                />

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
                <Input 
                    icon="lock"
                    placeholder="Repetir Password"
                    value={passFieldRepetir}
                    onChangeText={passFieldRepetir => setPassFieldRepetir(passFieldRepetir)}
                    password={true}
                    />
            </DivInputs>
            <DivCall>
                <ButtonCall onPress={callLogin}>
                    <Text>Fazer Login</Text>
                </ButtonCall>
            </DivCall>
            <DivButton>
               <Button name="Registar" onPress={() => registar()}/>
            </DivButton>
            </Scroll>
        </Container>
    );

}