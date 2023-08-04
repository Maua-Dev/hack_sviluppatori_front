import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

function PizzaioloPedidos(){
    return(
        <Body>
            <Container fluid>
                <Row>
                    <Col xs={4}>
                        <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #3604</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Mussarela
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Suco de Laranja
                                    </Card.Text>
                                    <Button variant="success">Pronto</Button>
                                </Card.Body>
                        </Card>
                        <Card style={{
                            margin: '1rem',
                        }}>
                            <Card.Header style={{
                                backgroundColor: 'white',
                                borderBottom: '1px solid black',
                                display: "inline-block",
                                fontWeight: 'bold',
                                fontSize: '2rem'
                            }}>Pedido #3605</Card.Header>
                            <Card.Body>
                                <Card.Text  style={{fontWeight: "bold"}}>
                                    Pizza Peperoni
                                </Card.Text>
                                <Card.Text  style={{fontWeight: "bold"}}>
                                    Guaraná
                                </Card.Text>
                                <Button variant="success">Pronto</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{
                            margin: '1rem',
                        }}>
                            <Card.Header style={{
                                backgroundColor: 'white',
                                borderBottom: '1px solid black',
                                display: "inline-block",
                                fontWeight: 'bold',
                                fontSize: '2rem'
                            }}>Pedido #3606</Card.Header>
                            <Card.Body>
                                <Card.Text  style={{fontWeight: "bold"}}>
                                    Pizza Peperoni
                                </Card.Text>
                                <Card.Text  style={{fontWeight: "bold"}}>
                                    Guaraná
                                </Card.Text>
                                <Button variant="success">Pronto</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={4}>
                        <Card style={{
                            margin: '1rem',
                        }}>
                            <Card.Header style={{
                                backgroundColor: 'white',
                                borderBottom: '1px solid black',
                                display: "inline-block",
                                fontWeight: 'bold',
                                fontSize: '2rem'
                            }}>Pedido #3607</Card.Header>
                            <Card.Body>
                                <Card.Text  style={{fontWeight: "bold"}}>
                                    Pizza Frango Catupiry
                                </Card.Text>
                                <Card.Text  style={{fontWeight: "bold"}}>
                                    Sem bebida
                                </Card.Text>
                                <Button variant="success">Pronto</Button>
                            </Card.Body>
                        </Card>

                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #3608</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Suco de Uva
                                    </Card.Text>
                                    <Button variant="success">Pronto</Button>
                                </Card.Body>
                            </Card>


                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #3609</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza de Calabresa
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Suco de Laranja
                                    </Card.Text>
                                    <Button variant="success">Pronto</Button>
                                </Card.Body>
                            </Card>

                    </Col>
                    <Col xs={4}>
                        <Card style={{
                            margin: '1rem',
                        }}>
                            <Card.Header style={{
                                backgroundColor: 'white',
                                borderBottom: '1px solid black',
                                display: "inline-block",
                                fontWeight: 'bold',
                                fontSize: '2rem'
                            }}>Pedido #3610</Card.Header>
                            <Card.Body>
                                <Card.Text style={{fontWeight: "bold"}}>
                                    Pizza de Mussarela
                                </Card.Text>
                                <Card.Text style={{fontWeight: "bold"}}>
                                    Suco de Laranja
                                </Card.Text>
                                <Button variant="success">Pronto</Button>
                            </Card.Body>
                        </Card>


                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #3611</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza Calabresa
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Sprite
                                    </Card.Text>
                                    <Button variant="success">Pronto</Button>
                                </Card.Body>
                            </Card>


                            <Card style={{
                                margin: '1rem',
                            }}>
                                <Card.Header style={{
                                    backgroundColor: 'white',
                                    borderBottom: '1px solid black',
                                    display: "inline-block",
                                    fontWeight: 'bold',
                                    fontSize: '2rem'
                                }}>Pedido #3612</Card.Header>
                                <Card.Body>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Pizza de Peperoni
                                    </Card.Text>
                                    <Card.Text  style={{fontWeight: "bold"}}>
                                        Água
                                    </Card.Text>
                                    <Button variant="success">Pronto</Button>
                                </Card.Body>
                            </Card>

                    </Col>
                </Row>
            </Container>
        </Body>
    )
}

export default PizzaioloPedidos