export const initialState = {
    countCart: 0,
    totalGeral:0,
    imposto: 0,
    subTotal:0,
    produtosCart: []
};

export const CartReducer = (state, action) => {
        switch(action.type) {
            case 'setCountCart':
                return {...state, countCart: action.payload.countCart};
                break;
            case 'setProdCart':
                let { produtosCart, totalGeral, imposto, subTotal, countCart } = state;

                let { preco, qtd } = action.payload.prodAdd;
                
                subTotal = parseFloat(preco) * qtd;
                imposto = subTotal * 0.065;
                totalGeral = subTotal + imposto;

                countCart = countCart + 1;
            
                produtosCart.push(action.payload.prodAdd);

                return {...state, 
                        subTotal: subTotal,
                        imposto: imposto,
                        totalGeral: totalGeral,
                        countCart: countCart,
                    };
                
                break;

            case 'setUpdataProdCart': 
                
                var calc = 0;
                
                let produtoUpdate = state.produtosCart.map((item) => {
                    if(item.id === action.payload.id) {
                        item.qtd = action.payload.qtd;
                    }
                    calc = calc + (parseFloat(item.preco) * item.qtd);
                    return item;
                });

                state.produtosCart = produtoUpdate;
                
                state.subTotal = calc;
                state.imposto = state.subTotal * 0.065;
                state.totalGeral = state.subTotal + state.imposto;

                return {...state}
                break;
            case 'setRemoveProdCart': 
                
                var calc = 0;
                var produtoUpdateDelete = [];

                 state.produtosCart.forEach((item) => {
                    if(item.id !== action.payload.id) {
                        calc = calc + (parseFloat(item.preco) * item.qtd);
                        produtoUpdateDelete.push(item);
                    }
                });

                console.log(produtoUpdateDelete);

                state.produtosCart = produtoUpdateDelete;

                console.log(state.produtosCart);
                
                state.subTotal = calc;
                state.imposto = state.subTotal * 0.065;
                state.totalGeral = state.subTotal + state.imposto;
                state.countCart = state.countCart - 1;

                return {...state}
                break;
            default:
                return state;
        }
};