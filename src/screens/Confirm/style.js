import styled  from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const TextLogin = styled.Text`
    font-size: 16px;
    margin-top: 50px;
`;
export const Text = styled.Text`
    font-size: 12px;
    color: #555;
`;

export const DivLogin = styled.View`
    height: 100px;
    padding: 20px;
    margin-top: 20px;
`; 

export const DivInputs = styled.View`
    height: 200px;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;

`;

export const DivCall = styled.View`
    flex:1;
    padding: 20px;
    align-items: flex-start;
`;
export const DivButton = styled.View`
    flex:1;
`;

export const ButtonCall = styled.TouchableOpacity`
    height: 20px;
`;