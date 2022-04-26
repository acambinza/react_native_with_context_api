import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

import InputSMS from '../../components/InputSMS';
import Back from '../../components/Back';
import Button from '../../components/Button';

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

    const [field1, setField1] = useState('')
    const [field2, setField2] = useState('')
    const [field3, setField3] = useState('')
    const [field4, setField4] = useState('')

   
    const reenviarSMS = () => {
        console.log("reenviarSMS");
    }

    const confirmar = () => {
        console.log("confirmar")
    }

    return (
        <Container >

            <Back />

            <DivLogin>
                <TextLogin>Insire o codigo que recebeu por SMS</TextLogin>
            </DivLogin>
            <DivInputs>

                <InputSMS
                    value={field1}
                    onChangeText={v => setField1(v)}
                    password={false}
                    placeholder="0"
                />
                <InputSMS
                    value={field2}
                    onChangeText={v => setField2(v)}
                    password={false}
                    placeholder="0"
                />
                <InputSMS
                    value={field3}
                    onChangeText={v => setField3(v)}
                    password={false}
                    placeholder="0"
                />
                <InputSMS
                    value={field4}
                    onChangeText={v => setField4(v)}
                    password={false}
                    placeholder="0"
                />
                
            </DivInputs>

            <DivCall>
                <ButtonCall onPress={reenviarSMS}>
                    <Text>Nao recebeu SMS? Reenviar codigo</Text>
                </ButtonCall>
            </DivCall>
            
            <DivButton>
                <Button 
                    name="Confirmar"
                    onPress={confirmar}
                />
            </DivButton>
           
        </Container>
    );

}