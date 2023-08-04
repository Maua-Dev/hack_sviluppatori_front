import { createContext} from 'react';
import React from 'react';
export const PagamentoContext = createContext();

function PagamentoProvider({ children }){
    const [pagamento, setPagamento] = React.useState(false);

    const [pedido, setPedido] = React.useState([]);

    function realizarPagamento(ped){
        setPagamento(true);
        setPedido(ped);
    }


    return (
        <PagamentoContext.Provider value={{realizarPagamento, pagamento, pedido}}>
            {children}
        </PagamentoContext.Provider>  
    )
}

export default PagamentoProvider;
