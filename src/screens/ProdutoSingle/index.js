import React, {useState, useEffect, useContext} from 'react';
import { SliderBox } from "react-native-image-slider-box";

import {useNavigation, useRoute} from '@react-navigation/native';
import ButtonFavoritosLarge from '../../components/ButtonFavoritosLarge';

import ButtonRange from '../../components/ButtonRange';
import Button from '../../components/Button';

import { CartContext } from '../../contexts/CartContext';

import { 
    Container,
    Text,
    TextAdicionado,
    Div,
    SwiperDiv,
    DetalhesDiv,
    QtdDiv,
    FinalizarDiv,
    ProdutoName,
    ProdutoMarca,
    ProdutoPreco,
}
from './style';

import Back from '../../components/Back';

let images = [
    require("../../assets/images/event1.jpg"),
    require("../../assets/images/event1.jpg"),
    require("../../assets/images/event2.jpg"),
    require("../../assets/images/event3.jpg"),
];


export default (props) => {

    const navigation = useNavigation();
    const route = useRoute();
    const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);

    const [isAddProd, setIsAddProd] =  useState(false);
    
    const [produtoInfo, setProdutoInfo] = useState({
        id: route.params.id,
        name: route.params.name,
        marca: route.params.marca,
        preco: route.params.preco,
        qtd: 0
    });

    const [qtdProd, setQtdProd] = useState(1);

    const addToChart = (prod) => {

        setIsAddProd(true);

        let prodFinal = {...prod, qtd: qtdProd };

        cartDispatch({
            type: 'setProdCart',
            payload: {
                prodAdd: prodFinal
            }
        });

        removeAddProdutoSMS();

    }

    const removeAddProdutoSMS =() => {
           // setTimeout(()=>{
             //   setIsAddProd(false)
          //  }, 3000);
    }

    return (
        <Container >
            <Back />
            <SwiperDiv>
                    
            <SliderBox 
                images={images} 
                sliderBoxHeight={240}
                onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                dotColor="#e7ab3c"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                //autoplay
                //circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10
                }}
                dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: "rgba(128, 128, 128, 0.92)"
                }}
                imageLoadingColor="#2196F3"
            />

            <ButtonFavoritosLarge produtoId={produtoInfo.id} />
            </SwiperDiv>

            <DetalhesDiv>
                <ProdutoName>{produtoInfo.name} </ProdutoName>
                <ProdutoMarca>{produtoInfo.marca} </ProdutoMarca>
                <ProdutoPreco>{parseFloat(produtoInfo.preco).toFixed(2)} <Text>AOA</Text> </ProdutoPreco>
            </DetalhesDiv>

            <QtdDiv>
                <Text>Feche sua encomenda</Text>
                <ButtonRange addQdtProd={setQtdProd} />

                {
                    isAddProd == true ?
                    <TextAdicionado> Produto adicionado </TextAdicionado>
                    : <TextAdicionado></TextAdicionado>
                }

            </QtdDiv>

            <FinalizarDiv>
                <Button onPress={()=> addToChart(produtoInfo)}
                   name="Adicionar"
                />
            </FinalizarDiv>

        </Container>
    )

}