import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
    height:60px;
	background-color: #e7ab3c;
	border-radius: 5px;
	justify-content: center;
	align-items: center;
    margin: 0 20px;
    border: 1px solid black;
`;

const Text = styled.Text`
    font-size: 18px;
	color: #fff;
    font-weight: bold;
`;



export default (props) => {

    //console.log('props btn ', props)

    const func = props.onPress.bind();

    return (
        <Button onPress={() => func()}>
                <Text>{props.name}</Text>
        </Button>
    )

}