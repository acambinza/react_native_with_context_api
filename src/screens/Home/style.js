import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #ffffff;
    padding: 20px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;

export const Div = styled.View``;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const HeaderArea = styled.View`
    height: 40px;
    flex-direction: row;
    align-items: center;
`;

export const SearchInput = styled.TextInput`
   flex:1;
   font-size: 15px;
   color: #ffffff;
   border-radius: 20px;
   border: 1px solid #000;
   background-color: #e7ab3c;
   padding-left: 20px;
   padding-right: 40px;
`;

export const SearchButton = styled.TouchableOpacity`
    right: 0;
    margin-right: 20px;
    position: absolute;
`;

export const Categorias = styled.View`
    height: 60px;
    margin-top: 15px;
`;

export const DivCate = styled.View`
    margin-top: 5px;
    flex-direction: row;
`;


export const CategoriaItem = styled.TouchableOpacity`
    color: #ffffff;
    height: 35px;
    width: 100px;
    border: 1px solid #444;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    margin-top: 5px;
`;

export const Text = styled.Text`
    color: #000;
`;

export const TextCategoria = styled.Text`
    color: #000;
    font-weight: bold;
`;

export const ContainerProdutos = styled.View`
    flex:1;
    margin-top: 30px;
`;

export const DivProduto = styled.View`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
`;


export const Name = styled.Text`
    color: black;
`;