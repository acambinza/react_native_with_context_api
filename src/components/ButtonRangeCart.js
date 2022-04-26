import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Container = styled.View`
    height: 40px;
    width: 120px;
    background-color: #fff;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #e7ab3c;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
`;

const Text = styled.Text`
    font-size: 24px;
`;

const BtnMinus = styled.TouchableOpacity`
    font-size: 20px;
`;

const BtnPlus = styled.TouchableOpacity`
    font-size: 20px;
`;

export default ({updateQdtProdFn, prod}) => {

    const [count, setCount] = useState(prod.qtd);

    const minusCount = () => {
        if(count > 1) {
            setCount(count-1)
            updateQdtProdFn(count-1);
        }
    }

    const plusCount = () => {
        setCount(count+1);  
        updateQdtProdFn(count+1);
    }

    return (
        <Container >
            
            <BtnMinus onPress={()=> minusCount()}>
                <Icon name="minus" size={18} color="#e7ab3c" />
            </BtnMinus>
                
                <Text> {count} </Text>
                
            <BtnPlus onPress={()=> plusCount()}>
                <Icon name="plus" size={18} color="#e7ab3c" />
            </BtnPlus>

        </Container>
    )

}