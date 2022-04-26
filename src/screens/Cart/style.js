import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #fff;
`;
export const DivProdutos = styled.View`
    flex:4;
    background-color: #fff;
`;

export const Scroller = styled.ScrollView`
    background-color: #e7ab3c;
`;

export const DivDetalhes = styled.View`
    flex:2;
    background-color: #fff;
    padding: 20px;
`;

export const DivButton = styled.View`
    flex:1;
    background-color: #fff;
`;

export const DivTotal = styled.View`
    justify-content: space-between;
    flex-direction: row;
    margin-top: 8px;
`;

export const Text = styled.Text`
    color: black;
`;

export const TextEmptyProduto = styled.Text`
    color: #fff;
    padding: 20px;
    font-size: 18px;
    font-weight: bold;
`;

export const TextBold = styled.Text`
    color: black;
    font-weight: bold;
`;

export const TextBoldSummary = styled.Text`
    color: black;
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
`;

export const Name = styled.Text`
    color: black;
`;