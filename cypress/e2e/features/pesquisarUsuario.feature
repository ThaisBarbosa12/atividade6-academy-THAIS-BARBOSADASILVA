# language: pt

Funcionalidade: Pesquisar Usuario

 @CriarUsuario
 Cenario: Deve ser possível buscar uma usuario pelo nome
  Dado que possuo um usuario cadastrado
  E que acessei a funcionalidade de buscar usuarios
  Quando buscar o usuario pelo nome
  E acessar a funcionalidade de ver detalhes 
  Então terei acesso a todas as informações usuario

 Cenario: Deve ser possível buscar uma usuario pelo email
  Dado que acessei a funcionalidade de buscar usuarios
  Quando buscar um usuario cadastrado pelo email
  E acessar a funcionalidade de ver detalhes 
  Então terei acesso a todas as informações usuario

 Cenario: Caso não seja possível encontrar um usuário deve exibir uma mensagem informando que o usuário não foi localizado
  Dado que acessei a funcionalidade de buscar usuarios
  Quando buscar o usuario pelo nome inválido "123Abobrinha456"
  Então o sistema retorna a mensagem: Ops! Não existe nenhum usuário para ser exibido, cadastre um novo usuário

 Cenario: Ao digitar um valor no campo de busca e selecionar o x existente deverá limpar o valor inputado
  Dado que acessei a funcionalidade de buscar usuarios
  E preencho o campo de busca com o valor "testeX"
  Quando selecionar o X existente no campo
  Então o valor preenchido deverá ser limpo
  E o campo de busca deverá estar vazio
