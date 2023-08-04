import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar'
import {Body, Main} from './styled-components/Body.jsx';
import {Text, Header, H1} from './styled-components/Text.jsx';
import {CardD, CardTitleD, CardBodyD} from './styled-components/Card.jsx';


function Inicio() {
  return (
    <Body>
    <Navbar>
      <Navbar.Brand style={{marginLeft: "10px"}} href="/">
        <img alt= "Logo Sviluppatori" src="https://media.discordapp.net/attachments/1082483101487333499/1128395434495316089/image.png?width=705&height=662" height="120px"/>
      </Navbar.Brand>
    </Navbar> 
    <Header>
      <Container>
        <Row>
          <Col md={12} >
            <H1>A melhor pizzaria de SCS</H1>
            <Text>Escolha uma das opções abaixo: </Text>
          </Col>
        </Row>
      </Container>
    </Header>
    <Main>
        <Container>
          <Row>
            <Col md={6}>
              <a href="/cardapio">
                <CardD>
                  <CardBodyD>
                      <CardTitleD>
                        Cliente
                      </CardTitleD>
                  </CardBodyD>
                </CardD>
              </a>
            </Col>
            <Col md={6}>
            <a href="/login">
                <CardD>
                  <CardBodyD>
                      <CardTitleD>
                        Funcionário
                      </CardTitleD>
                  </CardBodyD>
                </CardD>
              </a>
            </Col>
          </Row>
        </Container>
    </Main>
  </Body>
  );
}

export default Inicio;


