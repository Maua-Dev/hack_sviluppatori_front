import React from 'react'
import {Body} from '../styled-components/Body'
import {Container, Row, Col, Navbar} from 'react-bootstrap'
import {BotoesDiv, Botao, Redirecionar} from './styled-components/Botoes'
import {MesaDiv, Select, Option} from './styled-components/Mesas'
import {Imagem} from './styled-components/Imagem'
import Blueprint from './imgs/blueprint.png'

function MesasRecepcionista(){
    return(
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
                                <Redirecionar href="../recepcionista/mesas">Mesas</Redirecionar>
                            </Botao>
                            <Botao>
                                <Redirecionar href="../recepcionista/pedidos">Pedidos</Redirecionar>
                            </Botao>
                        </BotoesDiv>
                    </Col>  
                    <Col xs={7}>
                        <Imagem src={Blueprint} alt="Blueprint Pizzeria"/>
                    </Col>
                    <Col xs={3}>
                        <MesaDiv>
                           1 <Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                        2 <Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                        3<Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                        4<Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                       5 <Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                       6 <Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                        7<Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                        <MesaDiv>
                        8 <Select>
                            <Option>Disponível</Option>
                            <Option>Ocupada</Option>
                            <Option>Reservada</Option>
                           </Select>
                        </MesaDiv>
                    </Col>
                </Row>
            </Container>
        </Body>
    )
}

export default MesasRecepcionista