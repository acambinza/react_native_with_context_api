import React, {useState} from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5'


const ButtonFavoritos = styled.TouchableOpacity`
    position: absolute;
    bottom: -25px;
    right: 15px;
    background-color: #fff;
    border: 1px solid #ccc;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    justify-content:center;
    align-items:center;
    z-index: 1;
`;

export default ({produtoId}) => {

    const [check, setCheck] = useState(false);

    const isCheck = (screenName) => {
        
        if(check)
            setCheck(false);
        else
            setCheck(true);
        
        console.log(produtoId, check)

    }

    return (
        <ButtonFavoritos onPress={() => isCheck(' Item Favoritos ')} >
            <Icon 
                style={{ color : check === true ? '#e7ab3c' : 'black' }}
                name="heart"
                size={28}
                color="#e7ab3c"
            />
        </ButtonFavoritos>
    )

}