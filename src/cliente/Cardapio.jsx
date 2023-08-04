import React, { useContext, useState } from 'react';
import './Cardapio.css';
import "../cliente/fontes.css"
import { Body } from './styled-components/BodyCardapio';
import {TextoCard, TituloCard} from './styled-components/Card';
import {Container, Row, Col, Card, Toast } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { PagamentoContext } from './context/Pagamento';

let listaEntradas = [
  {
    nome: "Bruschetta",
    descricao: "Pão italiano, tomate, manjericão e azeite",
    preco: 15.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735763451617301/1136735934474375268/Bruschetta.png"
  },
  {
    nome: "Bruschetta de Atum",
    descricao: "Pão italiano, tomate, manjericão, azeite e atum",
    preco: 18.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735763451617301/1136735934818304051/Bruschetta_Atum.png"
  },
  {
    nome: "Arancini",
    descricao: "Bolinho de risoto com queijo",
    preco: 20.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735763451617301/1136735934260445204/Arancini.png"
  },
  {
    nome: "Salada Caprese",
    descricao: "Tomate, muçarela de búfala, manjericão e azeite",
    preco: 25.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735763451617301/1136735935082528838/Salada_Caprese.png"
  },
  {
    nome: "Sopa Cappeletti",
    descricao: "Sopa de cappeletti com frango",
    preco: 30.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735763451617301/1136735935376150670/Sopa_Cappeletti.png"
  }
]
let listaBebidas = [
  {
    nome: "Água",
    descricao: "Sem gás 500ml",
    preco: 3.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136740681382105210/agua-removebg-preview.png"
  },
  {
    nome: "Água",
    descricao: "Com gás 500ml",
    preco: 4.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136741874145689690/aguagas-removebg-preview.png"
  },
  {
    nome: "Coca-Cola",
    descricao: "Lata 350ml",
    preco: 5.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136737245701881926/coca.webp"
  },
  {
    nome: "Guaraná",
    descricao: "Lata 350ml",
    preco: 5.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136740401856905256/guarana-removebg-preview.png"
  },
  {
    nome: "Sprite",
    descricao: "Lata 350ml",
    preco: 5.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136741769107734578/sprit.png"
  },
  {
    nome: "Vinho tinto",
    descricao: "Garrafa 750ml",
    preco: 50.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136740402100179174/vinho_tinto-removebg-preview.png"
  },
  {
    nome: "Vinho branco",
    descricao: "Garrafa 750ml",
    preco: 50.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136740681684103309/vinho-branco-removebg-preview.png"
  },
  {
    nome: "Suco natural de laranja",
    descricao: "Copo 300ml",
    preco: 10.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136740856787910808/sucolaranja-removebg-preview.png"
  },
  {
    nome: "Suco de uva",
    descricao: "Copo 300ml",
    preco: 10.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735786516090961/1136740856485912606/sucoUva-removebg-preview.png"
  }
]
let listaPizzas = [
  {
    nome: "Pizza de Mussarela",
    descricao: "Mussarela, molho de tomate",
    preco: 60.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136739573922275329/pizza_mussarela-removebg-preview.png"
  },
  {
    nome: "Pizza de Calabresa",
    descricao: "calabresa, molho de tomate, mussarela",
    preco: 65.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136739612803477524/calabresa.png"
  },
  {
    nome: "Pizza Frango Catupiry",
    descricao: "Frango desfiado, catupiry, molho de tomate, mussarela",
    preco: 66.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136740644266721280/frango-removebg-preview.png"
  },
  {
    nome: "Pizza de Quatro Queijos",
    descricao: "Mussarela, provolone, catupiry, parmesão, molho de tomate",
    preco: 70.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136739844995956817/quatro_queijos-removebg-preview.png"
  },
  {
    nome: "Pizza de Peperoni",
    descricao: "Peperoni, molho de tomate, mussarela",
    preco: 63.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136781682188488744/image.png"
  },
  {
    nome: "Pizza de Marguerita",
    descricao: "Mussarela, tomate, manjericão, molho de tomate",
    preco: 61.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136741390949306368/png-clipart-sicilian-pizza-food-recipe-restaurant-watercolor-pizza-pizza-delivery-cuisine.png"
  },
  {
    nome: "Pizza Portuguesa",
    descricao: "Presunto, ovo, cebola, molho de tomate, mussarela",
    preco: 68.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136741842961047622/potyuguesa-removebg-preview.png"
  },
  {
    nome: "Pizza de atum",
    descricao: "Atum, cebola, molho de tomate, mussarela",
    preco: 71.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735778060374137/1136742478914007213/atum-removebg-preview.png"
  }
]
let listaSobremesas = [
  {
    nome: "Tiramissu",
    descricao: "Bolo de café com chocolate",
    preco: 24.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735799262576711/1136737261191442593/TIRAMISSU-removebg-preview.png"
  },
  {
    nome: "Pizza de Chocolate",
    descricao: "Pizza de lascas de chocolate com leite condensado",
    preco: 32.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735799262576711/1136737260914610227/PIZZA_DE_CHOCOLATE-removebg-preview.png"
  },
  {
    nome: "Cannoli de pistache",
    descricao: "Massa crocante recheada com creme de ricota e pistache",
    preco: 20.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735799262576711/1136737330632331305/CANOLLI_PISTACHE-removebg-preview.png"
  },
  {
    nome: "Gellato de creme",
    descricao: "Sorvete de creme",
    preco: 15.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735799262576711/1136737330913357844/GELATO-removebg-preview.png"
  },
  {
    nome: "Panna Cotta",
    descricao: "Pudim de creme de leite com frutas vermelhas",
    preco: 20.00,
    imagem: "https://cdn.discordapp.com/attachments/1136735799262576711/1136737331181789335/PANNA_COTTA-removebg-preview.png"
  }
]
function Cardapio() {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const menuOptions = ['Entradas', 'Bebidas', 'Pizzas', 'Sobremesas'];
  const [menuItems, setMenuItems] = useState([]);
  const [pedido, setPedido] = useState([])
  

  const {realizarPagamento} = useContext(PagamentoContext)

  React.useEffect(() => {
    setMenuItems(listaEntradas)
  }, []);

  React.useEffect(() => {
    setPedido(selectedItems)
  }, [selectedItems]);

  const handleMenuItemClick = (index) => {
    setSelectedMenu(index);
  };

  React.useEffect(() => {
    switch (selectedMenu) {
      case 0: 
        setMenuItems(listaEntradas);
        break;
      case 1: 
        setMenuItems(listaBebidas);
        break;
      case 2: 
        setMenuItems(listaPizzas);
        break;
      case 3:
        setMenuItems(listaSobremesas);
        break;
      default:
        setMenuItems([]);
        break;
    }
  }, [selectedMenu]);

  const handleMenuItemSelect = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const navigate = useNavigate();

  function navegarPagamento() {
    realizarPagamento(pedido)
    navigate("/pagamento");
  }

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const chamarGarcom = () => setShowA(true);
  const confirmarPedido = () => {
    setPedido(selectedItems)
    console.log(pedido)
    setShowB(true);
  }

  return (
    <Body>
      <Toast show={showA} onClose={() => setShowA(false)} style={{fontSize: "24px", color: "black"}}>
        <Toast.Header>
          <img height="32px" src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662" className="rounded me-2" alt="" />
          <strong className="me-auto">Sviluppatori informa: </strong>
          <small>1 segundo</small>
        </Toast.Header>
        <Toast.Body>Seu garçom foi chamado. Por favor, aguarde!</Toast.Body>
      </Toast>
      <Toast show={showB} onClose={() => setShowB(false)} style={{fontSize: "24px", color: "black"}}>
      <Toast.Header>
        <img height="32px" src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662" className="rounded me-2" alt="" />
        <strong className="me-auto">Sviluppatori informa: </strong>
        <small>1 segundo</small>
      </Toast.Header>
      <Toast.Body>Seu pedido foi feito!</Toast.Body>
    </Toast>
      <h1>Menu de Pizzas</h1>
    <Container fluid style={{paddingLeft: "0px"}}>
        <Row>
            <Col xs={2}>
                <div className="actions-container">
                    <button className="action-button" onClick={chamarGarcom}>Chamar Garçom</button>
                    <button className="action-button" onClick={navegarPagamento}>Efetuar Pagamento</button>
                </div>
            </Col>
            <Col xs={8}>
                <div className="menu-container">
                    <ul className="menu-list">
                    {menuOptions.map((option, i) => (
                        <li
                            key={i}
                            className={`menu-item  ${
                            selectedMenu === i ? 'active' : ''
                            }`}
                            onClick={() => handleMenuItemClick(i)}
                        >
                            {option}
                        </li>
                    ))} 
                    </ul>
                </div>
                {selectedMenu !== null && (
                  <div className="menu-content">
                    {menuItems.map((item, index) => (
                      <div key={index} className="menu-row">
                        <Card style={{ backgroundColor: "#abb78b", border: "0px", cursor: "pointer", marginBottom: "16px" }} onClick={() => handleMenuItemSelect([item.nome,item.preco])}>
                          <Card.Img src={item.imagem} style={{ width: "160px", height: "160px", marginLeft: "16px", margin: "auto" }} alt="Pizza" />
                          <Card.Body>
                            <Card.Text>
                              <TituloCard>
                                {item.nome}
                              </TituloCard>
                              <TextoCard>
                                {item.descricao}
                              </TextoCard>
                              <TextoCard>
                                R$ {item.preco}
                              </TextoCard>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>
                )}
                <div className="order-container" style={{color: "black"}}>
                    <h4>Pedido:</h4>
                    <ul>
                    {selectedItems.map((item, index) => (
                        <li key={index}>{item[0]}</li>
                    ))}
                    </ul>
                    <button className="confirm-button" onClick={confirmarPedido}>
                    Confirmar Pedido
                    </button>
                </div>
            </Col>
        </Row>
    </Container>
    </Body>
  );
}

export default Cardapio