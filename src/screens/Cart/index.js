import React, {useContext, useEffect, useState} from 'react';

import Button from '../../components/Button';
import ProdutoCartItem from '../../components/ProdutoCartItem';

import {
    Container, 
    DivProdutos,
    Scroller,
    DivDetalhes,
    DivButton,
    Text,
    TextBold,
    DivTotal,
    TextBoldSummary,
    TextEmptyProduto

} from './style';

import { CartContext } from '../../contexts/CartContext';

export default () => {

    const { state: cartState, dispatch: cartDispatch } = useContext(CartContext);
    const [produtos, setProdutos] = useState(cartState.produtosCart);
  
    useEffect(() => {
        //console.log('produ <<<<<<<<<<<<<<<<<, ')
        PrintProdutos();
    },[]);


    const PrintProdutos = () => {
    
        var rs  = null;

        if(produtos.length > 0 ){
                rs = produtos.map((item, key) => {
                      return <ProdutoCartItem 
                        key={key} 
                        id={item.id} 
                        name={item.name} 
                        marca={item.marca} 
                        preco={item.preco}
                        qtd={item.qtd} 
                        setProdutos={setProdutos}
                      />
                });

        }else{
           rs = <TextEmptyProduto>Nenhum produto adicionado! </TextEmptyProduto>
        }
         
        return rs; 

    }
    



    return(
        <Container>
            <DivProdutos>
                <Scroller>

                   <PrintProdutos />
                    
                </Scroller>
            </DivProdutos>
            <DivDetalhes>
                <TextBoldSummary >Order Summary </TextBoldSummary>

                <DivTotal>
                    <Text>Subtotal: </Text>
                    <Text> {parseFloat(cartState.subTotal).toFixed(2)} AOA </Text>
                </DivTotal>

                <DivTotal>
                    <Text>Retencao na fonte (6,5%): </Text>
                    <Text> {parseFloat(cartState.imposto).toFixed(2)} AOA </Text>
                </DivTotal>

                <DivTotal>
                    <TextBoldSummary >Total </TextBoldSummary>
                    <TextBold > {parseFloat(cartState.totalGeral).toFixed(2)} AOA </TextBold>
                </DivTotal>

            </DivDetalhes>
            <DivButton>
               <Button onPress={()=> console.log('btn')} name="Finalizar Pedido" />
            </DivButton>
        </Container>
    )
}