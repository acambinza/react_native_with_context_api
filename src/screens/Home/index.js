import React,{useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Platform, RefreshControl} from 'react-native';

import ItemProduto from '../../components/ItemProduto';

import {
    Container, 
    Scroller,
    HeaderArea, 
    SearchInput,
    SearchButton,
    Categorias,
    CategoriaItem,
    Text,
    TextCategoria,
    ContainerProdutos,
    Div,
    DivCate,
    DivProduto,
    LoadingIcon,

} from './style';

export default ({state, navigaiton}) => {
    
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    
    useEffect(() => {

            console.log('home do projecto')

    },[]);

    const onRefresh = () => {
            //setRefreshing(true)
            console.log(' Refrenshind call ')
    }


    return(
        <Container>
        
                    <HeaderArea>
                            <SearchInput
                                placeholder="Pesquise aqui os produtos... "
                            >
                            </SearchInput>

                            <SearchButton>
                                <Icon 
                                    name="search"
                                    size={20}
                                />
                            </SearchButton>
                    </HeaderArea>

                    <Categorias>
                    
                        <Div>
                            <TextCategoria>Categorias</TextCategoria>
                        </Div>

                        <DivCate>

                        <Scroller  horizontal={true} showsHorizontalScrollIndicator={false}>

                            <CategoriaItem style={{ backgroundColor: '#e7ab3c' }} >
                                <Text>Todas</Text>
                            </CategoriaItem>

                            <CategoriaItem >
                                <Text>Homens</Text>
                            </CategoriaItem>

                            <CategoriaItem >
                                <Text>Mulheres</Text>
                            </CategoriaItem>

                            <CategoriaItem >
                                <Text>Criancas</Text>
                            </CategoriaItem>

                            <CategoriaItem >
                                <Text>Outros</Text>
                            </CategoriaItem>

                                </Scroller>
                            </DivCate>

                    </Categorias>

            <ContainerProdutos>
                <Scroller refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>

                
                    {loading && 
                        <LoadingIcon size="large" color="#e7ab3c" />
                    }
                

                    <DivProduto>

                        <ItemProduto
                            name="Nome do Produto"
                            marca="Venan"
                            preco="1000"
                            id="1" 
                        />  

                        <ItemProduto
                            name="ABCDEFGHJ"
                            marca="DELL"
                            preco="2000"
                            id="2" 
                        /> 

                        <ItemProduto
                            name="A"
                            marca="Venan"
                            preco="33000"
                            id="3" 
                        /> 

                        <ItemProduto
                            name="A"
                            marca="Venan"
                            preco="33000"
                            id="4" 
                        /> 

                        <ItemProduto
                            name="AAAAAAAA"
                            marca=""
                            preco="18800.90"
                            id="5" 
                        /> 

                        <ItemProduto
                            name="A"
                            marca="Venan"
                            preco="33000"
                            id="6" 
                        /> 

                        <ItemProduto
                            name="Sapatos 44"
                            marca="V"
                            preco="12500"
                            id="7" 
                        /> 

                        <ItemProduto
                            name="Zapa Men 44"
                            marca="Zara"
                            preco="10000"
                            id="8" 
                        /> 

                        <ItemProduto
                            name="Lacoste"
                            marca="Venan"
                            preco="13000"
                            id="9" 
                        />       
                            
                            
                    </DivProduto>
                </Scroller>
            </ContainerProdutos>
        
        </Container>
    )
}