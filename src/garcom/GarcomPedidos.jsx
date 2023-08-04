import React from 'react';
import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card, Button, Navbar} from 'react-bootstrap';
import {BotoesDiv, Botao, Redirecionar} from '../recepcionista/styled-components/Botoes';
import {Mesa} from '../garcom/styled-components/Mesas';
function GarcomPedidos(){
    return(
        <div>
            <Body>
            <Container fluid>
                <Row>
                    <Col xs={2}  style={{paddingLeft: "0px"}}>
                        <Navbar>
                            <Navbar.Brand style={{marginLeft: "10px"}} href="/">
                                <img alt= "Logo Sviluppatori" src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662" height="120px"/>
                            </Navbar.Brand>
                        </Navbar>
                        <BotoesDiv>
                            <Botao>
                                <Redirecionar href="../garcom/mesas">Mesas</Redirecionar>
                            </Botao>
                            <Botao>
                                <Redirecionar href="../garcom/pedidos">Pedidos</Redirecionar>
                            </Botao>
                        </BotoesDiv>
                    </Col> 
                    <Col xs={3}>
                        <Mesa>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title style={{borderBottom: "1px solid black"}}>Mesa 1</Card.Title>
                                    <Card.Text>
                                        <p>Bruschetta</p>
                                        <p>Pizza de Peperoni</p>
                                        <p>Pizza de Calabresa</p>
                                        <p>Coca-Cola</p>
                                    </Card.Text> 
                                    <Button variant="success">Entregue</Button>
                                </Card.Body>
                            </Card>
                        </Mesa>
                    </Col>
                </Row>
            </Container>
        </Body>
        </div>
    )
}

export default GarcomPedidos