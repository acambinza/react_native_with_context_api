import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import ButtonFavoritos from '../components/ButtonFavoritos';

let images = [
    require("../assets/images/event1.jpg"),
    require("../assets/images/event1.jpg"),
    require("../assets/images/event2.jpg"),
    require("../assets/images/event3.jpg"),
    require("../assets/images/event3.jpg"),
    require("../assets/images/event3.jpg"),
    require("../assets/images/event4.jpg"),
    require("../assets/images/event4.jpg"),
    require("../assets/images/events5.jpg"),
    require("../assets/images/events5.jpg"),
];

const Container = styled.TouchableOpacity`
    height: 200px;
    flex: 1 120px;
    border: 1px solid black;
    margin: 5px;
    border-radius: 10px;
    justify-content: center;
`;

const ViewProduto = styled.View`
    flex: 2;
    width: 100%;
    overflow: hidden;
`;

const ViewDetalhes = styled.View`
    flex:1;
    justify-content: space-between;
    padding: 5px;
`;

const View = styled.View``;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

const Text = styled.Text``;

const ProdutoName = styled.Text`
    font-size: 14px;
`;

const ProdutoMarca = styled.Text`
    font-size: 11px;
`;

const ProdutoPreco = styled.Text`
    font-weight: bold;
    font-size: 13px;
`;


export default (props) => {

    const navigation = useNavigation();


    const detalhesProduto = () => {
        
        //console.log(props)

        navigation.navigate('ProdutoSingle', {
            id: props.id,
            name: props.name,
            marca: props.marca,
            preco: props.preco
        });
    }

    return(
        <Container onPress={() => detalhesProduto() }>
            <ViewProduto>
                    <Image
                        resizeMode="cover"
                        source={images[props.id]} 
                    />

                   <ButtonFavoritos produtoId={props.id} />

            </ViewProduto> 
            
            <ViewDetalhes>
                    <ProdutoName> {props.name} </ProdutoName>
                    <ProdutoMarca> {props.marca} </ProdutoMarca>
                    <ProdutoPreco> {parseFloat(props.preco).toFixed(2)} <Text>AOA</Text></ProdutoPreco>
            </ViewDetalhes>
           
        </Container>
    )
}