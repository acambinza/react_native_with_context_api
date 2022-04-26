import React, {useContext, useState, useEffect} from 'react';

import { View, StyleSheet, Button, Alert } from "react-native";

import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ButtonRangeCart from './ButtonRangeCart';

import { CartContext } from '../contexts/CartContext';


let images = [
    require("../assets/images/event1.jpg"),
    require("../assets/images/event1.jpg"),
    require("../assets/images/event2.jpg"),
    require("../assets/images/event3.jpg"),
];



const ContainerRange = styled.View`
    height: 40px;
    width: 120px;
    background-color: transparent;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #e7ab3c;
    border-radius: 10px;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
`;

const TextRange = styled.Text`
    font-size: 24px;
   
`;

const BtnMinus = styled.TouchableOpacity`
    font-size: 18px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #fff;
    color: #555;
    align-items:center;
    justify-content:center;
`;

const BtnPlus = styled.TouchableOpacity`
    font-size: 18px;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #fff;
    color: #555;
    align-items:center;
    justify-content:center;
`;


const Container = styled.View`
    flex-direction: row;
    padding: 10px;
    border-bottom-width: 1px;
    border-color: #ccc;

`;

const DivProduto = styled.View`
    flex: 1;
    flex-direction: row;
    height: 100px;
`;

const DivBtn = styled.View`
    flex:1 30px;
    justify-content: center;
    align-items: center;
`;

const DivDetalhesProduto = styled.View`
    flex-direction: column;
    flex: 1 60px;
`;


export const ProdutoName = styled.Text`
    font-size: 14px;
    margin-top: 5px;
`;

export const ProdutoMarca = styled.Text`
    font-size: 11px;
    margin-top: 5px;
`;

export const ProdutoPreco = styled.Text`
    margin-top: 5px;
    font-weight: bold;
    font-size: 13px;
`;

const BtnRemove = styled.TouchableOpacity`
    margin-top: 5px;
`;

const Text = styled.Text`
    color: #ccc;
`;
const TextPreco = styled.Text`
    color: #000;
`;

const ImageProduto = styled.Image`
    height: 100%;
    width: 100%;
    border: 1px solid #ffffff;
    flex: 1 80px;
`;

export default (props) => {

    const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
  
    const [count, setCount] = useState(props.qtd);
    const [total, setTotal] = useState(props.preco);

    useEffect(() => {
        //console.log('Cart Effect ... Ou Update do produto ...  ')
        let tot = parseFloat(props.preco) * count;
        setTotal(tot);
    }, [])
    
    const updateQdtProdFn = ( id, isPlus ) => {
            
            var a = 0;

            if(isPlus) {
                a = count + 1; 
                setCount(a);  
            } else {
                if(count > 1) {
                    a = count - 1; 
                    setCount(a)
                }else{
                    a = count;
                }
            }

            cartDispatch({
                type: 'setUpdataProdCart',
                payload: {
                    id: props.id,
                    qtd: a,
                }
            });
    }

    const removerProdutoInCart = (id) => {
            console.log(id)   
            
            cartDispatch({
                type: 'setRemoveProdCart',
                payload: {
                    id: id,
                }
            });

            console.log(cartState.produtosCart)

            props.setProdutos(cartState.produtosCart)
    }

    const createTwoButtonAlert = (id, name) =>
    Alert.alert(
      "Remover Item",
      `Deseja remover o Produto ${name}?`,
      [
        {
          text: "Nao",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Sim", onPress: () => removerProdutoInCart(id) }
      ],
      { cancelable: false }
    );

  const createThreeButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );


    return(
        <Container>
            <DivProduto>
                <ImageProduto source={images[0]}/>
            </DivProduto>
            <DivDetalhesProduto>
                    <ProdutoName> {props.name} </ProdutoName>
                    <ProdutoMarca> {props.marca} </ProdutoMarca>
                    <ProdutoPreco> { total } <TextPreco > AOA </TextPreco> </ProdutoPreco>
                </DivDetalhesProduto>
            <DivBtn>
                    <ContainerRange >
            
                    <BtnMinus onPress={() => updateQdtProdFn(props.id, false)}>
                        <Icon name="minus" size={18} color="black" />
                    </BtnMinus>
                
                        <TextRange > {count} </TextRange>
                
                    <BtnPlus onPress={() => updateQdtProdFn(props.id, true)}>
                        <Icon name="plus" size={18} color="black" />
                    </BtnPlus>

                </ContainerRange>

                <BtnRemove onPress={(id, name) => createTwoButtonAlert(props.id, props.name)}>
                    <Text> Remove </Text>
                </BtnRemove>

            </DivBtn>
        </Container>
    )
}