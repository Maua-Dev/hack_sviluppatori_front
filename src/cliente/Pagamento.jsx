import React from 'react'
import {PagamentoContext} from './context/Pagamento'
import {ContainerCard, Card,TextoCard,TituloCard, BotaoCard} from './styled-components/Pagamento'    
import { Toast } from 'react-bootstrap';
import {ToastContainer} from './styled-components/Toast'


function Pagamento(){
    const {pagamento, pedido} = React.useContext(PagamentoContext);
    console.log(pedido[0])

    const [showA, setShowA] = React.useState(false);

    function pagarPedido(){
        setShowA(true);
    }

    return(
        <div>
        <ToastContainer> 
          <Toast show={showA} onClose={() => setShowA(false)} style={{fontSize: "24px", color: "black"}}>
          <Toast.Header>
            <img height="32px" src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662" className="rounded me-2" alt="" />
            <strong className="me-auto">Sviluppatori informa: </strong>
            <small>1 segundo</small>
          </Toast.Header>
          <Toast.Body>Seu garçom foi chamado. Por favor, aguarde!</Toast.Body>
          </Toast>
        </ToastContainer>
      {pagamento ? (
        <>
          <h1>Pagamento</h1>
          <ContainerCard>
            <Card>
              <TituloCard>Pedido</TituloCard>
              {pedido.map((item, index) => (
                <React.Fragment key={index}>
                  <TextoCard>{item[0]} R${item[1]}</TextoCard>
                </React.Fragment>
              ))}
              <BotaoCard onClick={pagarPedido}>Pagar</BotaoCard>
            </Card>
          </ContainerCard>
        </>
      ) : (
        <>
          <h1>Pagamento</h1>
          <ContainerCard>
            <Card>
              <TituloCard>Pedido</TituloCard>
              <TextoCard>Não há pedidos registrados nesta mesa</TextoCard>
            </Card>
          </ContainerCard>
        </>
      )}
    </div>
  );
}

export default Pagamento