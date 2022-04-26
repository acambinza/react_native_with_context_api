import React, {useState} from 'react';

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5'


const ButtonFavoritos = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
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
                size={24}
                color="#e7ab3c"
                fill="red"
            />
        </ButtonFavoritos>
    )

}