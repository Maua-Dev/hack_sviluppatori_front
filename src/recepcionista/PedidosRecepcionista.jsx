import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card} from 'react-bootstrap';
import {BotoesDiv, Botao, Redirecionar} from '../recepcionista/styled-components/Botoes';
import {Pedido} from '../recepcionista/styled-components/Pedidos';

function PedidosRecepcionista(){
    return(
        <Body>
            <Container fluid>
                <Row>
                    <Col xs={2}  style={{paddingLeft: "0px"}}>
                        <BotoesDiv>
                            <Botao>
                                <Redirecionar href="../recepcionista/mesas">Mesas</Redirecionar>
                            </Botao>
                            <Botao>
                                <Redirecionar href="../recepcionista/pedidos">Pedidos</Redirecionar>
                            </Botao>
                        </BotoesDiv>
                    </Col> 
                    <Col xs={3}>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4384</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Mussarela
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Suco de Laranja
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4385</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Peperoni
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Guaraná
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4385</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Peperoni
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Guaraná
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                    </Col>
                    <Col xs={3}>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4387</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Frango Catupiry
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Sem bebida
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4388</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Suco de Uva
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4389</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pronto
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                    </Col>
                    <Col xs={3}>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4390</Card.Header>
                                <Card.Body>
                                    <Card.Text style={{fontWeight: "bold"}}>
                                        Pizza de Mussarela
                                    </Card.Text>
                                    <Card.Text style={{fontWeight: "bold"}}>
                                        Suco de Laranja
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4391</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Sprite
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                        <Pedido>
                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #4392</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza de Peperoni
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Água
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Pedido>
                    </Col>
                </Row>
            </Container>
        </Body>
    )
}

export default PedidosRecepcionista