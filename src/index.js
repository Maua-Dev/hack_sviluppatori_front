import React from 'react';
import ReactDOM from 'react-dom/client';
import Inicio from './Inicio';
import reportWebVitals from './reportWebVitals';
import Login from './admin/Login'
import AdminFinanceiro from './admin/AdminFinanceiro';
import AdminIngredientes from './admin/AdminIngredientes';
import Cardapio from './cliente/Cardapio';
import Pagamento from './cliente/Pagamento';
import GarcomPedidos from './garcom/GarcomPedidos';
import GarcomMesas from './garcom/GarcomMesas';
import PizzaioloPedidos from './pizzaiolo/PizzaioloPedidos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MesasRecepcionista from './recepcionista/MesasRecepcionista';
import PedidosRecepcionista from './recepcionista/PedidosRecepcionista';
import PagamentoProvider from './cliente/context/Pagamento';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PagamentoProvider>
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Inicio />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/admin/financeiro" element={<AdminFinanceiro />} />
      <Route path="/admin/ingredientes" element={<AdminIngredientes />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/pagamento" element={<Pagamento />} />
      <Route path="/garcom/pedidos" element={<GarcomPedidos />} />
      <Route path="/garcom/mesas" element={<GarcomMesas />} />
      <Route path="/pizzaiolo/pedidos" element={<PizzaioloPedidos />} />
      <Route path="/recepcionista/mesas" element={<MesasRecepcionista />} />
      <Route path="/recepcionista/pedidos" element={<PedidosRecepcionista />} />
    </Routes>
    </BrowserRouter>
  </PagamentoProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
