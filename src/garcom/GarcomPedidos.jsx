import React from 'react';
import {Body} from '../styled-components/Body';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import {BotoesDiv, Botao, Redirecionar} from '../recepcionista/styled-components/Botoes';
import {Mesa} from '../garcom/styled-components/Mesas';
function GarcomPedidos(){
    return(
        <div>
            <Body>
            <Container fluid>
                <Row>
                    <Col xs={2}  style={{paddingLeft: "0px"}}>
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