import {Body} from "../styled-components/Body";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import {Input, Label} from "../admin/styled-components/Modal";
import {BotoesDiv, Botao, BotaoA} from "../admin/styled-components/Botoes";
import {TabelaD, Tabela, TabelaRow, TabelaHead, TabelaData, TabelaH, TabelaTdBotao, TabelaBotao, Svg} from "../admin/styled-components/Tabela";
import React from 'react'
import { Modal, Button } from 'react-bootstrap';

let listaIngredientes = [
    {
        nome: "Molho de Tomate",
        quantidade: "2kg",
        preco: "50",
    }
]
function Ingredientes(){
    const [isShow, setIsShow] = React.useState(false);

    const initModal = () => {
      setIsShow(true);
    };

    const closeModal = () => {
        setIsShow(false);
    };


    const [ingredientes, setIngredientes] = React.useState([]);
    const [inputNome, setInputNome] = React.useState("");
    const [inputQuantidade, setInputQuantidade] = React.useState("");
    const [inputPreco, setInputPreco] = React.useState("");

    React.useEffect(()=>{
        setIngredientes(listaIngredientes);
    }, []);

    function createIngredientes(){
        let mensagem = {}
        if (inputNome === "" || inputQuantidade === "" || inputPreco === ""){
            mensagem = {
                titulo: "Erro",
            }
        }
        else{
            mensagem = {
                nome: inputNome,
                quantidade: inputQuantidade,
                preco: inputPreco,
            }
            
        }
        let newIngredientes = [...ingredientes, mensagem];
        setIngredientes(newIngredientes);
        
        setInputNome("");
        setInputQuantidade("");
        setInputPreco("");
        closeModal();
    }
    
    return(
        <Body>
            <Modal style={{fontFamily: "Arial"}}  show={isShow} onHide={() => setIsShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: "black"}}>Ingredientes</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Label htmlFor="ingredientes">Ingredientes</Label>
                        <Input type="text" value={inputNome} id="ingredientes" name="ingredientes" onChange={(event) => setInputNome(event.target.value)} placeholder="Molho de Tomate..."/>
                    </div>
    
                    <div>
                        <Label htmlFor="quantidade">Quantidade:</Label>
                        <Input type="text" value={inputQuantidade} id="quantidade" name="quantidade"  onChange={(event) => setInputQuantidade(event.target.value)}  placeholder="2kg..." />
                    </div>
                    <div>
                        <Label htmlFor="Preco">Preco</Label>
                        <Input type="number" value={inputPreco} id="Preco" name="Preco" onChange={(event) => setInputPreco(event.target.value)} placeholder="50,100,500..."/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger"  onClick={closeModal}>
                        Fechar
                    </Button>
                    <Button variant="success" onClick={() => createIngredientes()}>
                        Adicionar
                    </Button>
                </Modal.Footer>
            </Modal>
            <Navbar>
                <Navbar.Brand style={{marginLeft: "10px"}} href="/">
                    <img alt= "Logo Sviluppatori" src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662" height="120px"/>
                </Navbar.Brand>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col md={3} style={{padding: 0}}>
                        <BotoesDiv>
                            <Botao  disabled="disabled" style={{backgroundColor: "#72F478"}}>
                                <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-file-spreadsheet-fill" viewBox="0 0 16 16">
                                    <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2zm2 7h-4v2h4V7zm0 3h-4v2h4v-2zm0 3h-4v3h2a2 2 0 0 0 2-2v-1zm-5 3v-3H6v3h3zm-4 0v-3H2v1a2 2 0 0 0 2 2h1zm-3-4h3v-2H2v2zm0-3h3V7H2v2zm4 0V7h3v2H6zm0 1h3v2H6v-2z"/>
                                </Svg>                 
                                Estoque
                            </Botao>
                            <BotaoA href="/admin/financeiro">
                                <Botao>
                                    <Svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-2 bi bi-currency-exchange" viewBox="0 0 16 16">
                                        <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                                    </Svg>
                                    Financeiro
                                </Botao>
                            </BotaoA>
                        </BotoesDiv>
                    </Col>
                    <Col md={8}>
                        <TabelaD>
                        <Tabela>
                            <TabelaHead>
                                <TabelaRow>
                                    <TabelaH>Ingredientes</TabelaH>
                                    <TabelaH>Quantidade</TabelaH>
                                    <TabelaH>Preco</TabelaH>
                                </TabelaRow>
                            </TabelaHead>
                            <tbody>
                            {ingredientes.map((ingrediente, i) => (
                                <TabelaRow key={i}>
                                    <TabelaData>{ingrediente.nome}</TabelaData>
                                    <TabelaData>{ingrediente.quantidade}</TabelaData>
                                    <TabelaData>R$ {ingrediente.preco}</TabelaData>
                                </TabelaRow>
                            ))}
                                <TabelaRow>
                                    <TabelaTdBotao>
                                        <TabelaBotao onClick={initModal}>
                                            <Svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi teste bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                                                <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
                                                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                            </Svg>
                                        </TabelaBotao>
                                    </TabelaTdBotao>
                                </TabelaRow>
                            </tbody>
                        </Tabela>
                        </TabelaD>
                    </Col>
                </Row>
            </Container>
        </Body>
    )
    
}

export default Ingredientes