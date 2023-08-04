# Sviluppatori Pizzaria

Olá! Bem vindos a Sviluppatori Pizzaria. Este projeto é um site criado com a biblioteca react para criar um site de uma pizzaria que esteja integrada com as novas tecnologias e que as utiliza o máximo possível.
A Sviluppatori Pizzaria é dividida em duas frentes: A parte do cliente e do funcionário. O acesso a parte do cliente é feito através de uma tela instaurada nas mesas que contém todas as funcionalidades necessárias para o cliente aproveitar sua experiência ao máximo. Já a tela do funcionário é dividida em quatro vertentes: administrador, garçom, pizzaiolo e recepção. Cada vertente tem um método de acesso específico que direciona o usuário a tela.

## Link para a plataforma

[Sviluppatori Pizzaria](https://d2yeoa37wbc5z6.cloudfront.net)


## Estrutura do Projeto

A plataforma contém uma tela inicial que somente os funcionários do estabelecimento possuem acesso. O cliente nunca tem acesso a essa tela.

Se os funcionários estiveram configurando a tela de cada uma das mesas, eles selecionaram a opção cliente. Caso contrário, selecionaram a opção funcionário.

### Cliente

A tela do cliente possui um cardápio em que pode selecionar os produtos que deseja consumir, pode chamar um garçom se precisar de alguma assistência humana, assim como pode exigir o pagamento. O pagamento não é feito pela tela, ele só um método para pedir a conta.

### Funcionário

A seção do funcionário exige, primeiramente, um login para ela poder ser acessado por completo. Cada vertente, como já foi descrita acima tem um método de acesso específico, isto é, um email e uma senha pré-definidos.

#### Administrador

Caso o usuário seja um administrador, ele é responsável por gerenciar o estoque do estabelecimento, assim como a parte financeira.

#### Garçom

Caso o usuário seja um garçom, ele possui duas telas em que pode consultar o status de pedido de uma mesa, assim como pode consultar se alguma mesa necessita de assistência ou se está pronta para fechar a conta.

#### Pizzaiolo

Caso o usuário seja um pizzaiolo, ele tem acesso à todos os pedidos ainda não prontos.

#### Recepção
Caso o usuário seja da recepção, ele tem acesso a duas telas. Uma delas é de controle das mesas, isto é, se ela está livre, reservada ou ocupada. A outra é de controle de pedidos feitos para viagem.

## Outros repositórios
Aqui está o acesso aos outros repositórios criados para o projeto:

[Repositório 1](https://github.com/MateusCMartins724/SviluppatoriPizzaria)
[Repositório 2](https://github.com/Maua-Dev/hack_g4_sviluppatori_front)
