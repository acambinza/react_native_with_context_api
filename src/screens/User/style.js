import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #ffffff;
`;

export const DivUserName = styled.View`
    height: 100px;
    border-bottom-width: 2px;
    border-bottom-color: #ccc;
    background-color: #e7ab3c;

`;

export const DivDetalhes = styled.View`
    flex: 1;
    margin-top: 20px;
    
`;

export const Div = styled.TouchableOpacity`
    height: 50px;
    padding: 20px;
    flex-direction: row;
    align-items:center;
`;


export const Name = styled.Text`
    color: #ffffff;
    font-size: 24px;
    padding: 20px;
    margin-top: 20px;

`;

export const Text = styled.Text`
    color: black;
    font-size: 18px;
    margin-left: 10px;
`;