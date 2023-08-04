import styled from 'styled-components';

const TextoCard = styled.p`
    color: white;
    font-size: 16px;
    font-family: arial;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 160px;
    height: 80px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: auto;
`; 

const TituloCard = styled.p`
    color: white;
    font-size: 28px;
    display: flex;
    justify-content: center;
    margin: auto;
`; 

const CardButton = styled.div`
    :hover{
        cursor: pointer;
        background-color: red;
    }
`; 
export {TextoCard,TituloCard, CardButton}