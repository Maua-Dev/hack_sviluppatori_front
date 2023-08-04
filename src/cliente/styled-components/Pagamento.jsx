import styled from 'styled-components';

const ContainerCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const Card = styled.div`
    background-color: #E2EFE2;
    border-radius: 10px;
    margin: 10px;
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const TituloCard = styled.h1`
    color: black;
    font-size: 24px;
    font-family: arial;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const TextoCard = styled.p`
    color: black;
    font-size: 12px;
    font-family: arial;
    text-align: center;
    overflow: hidden;
    display: inline-flex;
    justify-content: center;

`;

const BotaoCard = styled.button`
    border: 0px;
    background-color: green;
    font-size: 16px;
    font-family: arial;
    color: white;
    width: 160px;
    height: 40px;
    border-radius: 50px;
    margin: auto;
    
`;


export {ContainerCard,Card, TituloCard, TextoCard, BotaoCard}