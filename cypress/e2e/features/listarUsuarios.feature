# language: pt

Funcionalidade: Listar Usuarios

 Contexto: Usuário deverá acessar a funcionalidade de listar usuarios
  Dado que acessei a funcionalidade de listar usuarios

 @lista6Usuarios
 Cenario: Deve ser possível buscar uma lista de usuarios
  Quando visualizar a lista com todos usuários
  Então terei acesso as informações de nome e email de todos os usuarios

 @listaVazia 
 Cenario: Deve exibir uma opção para cadastrar usuário quando não existirem usuários cadastrados
  Quando visualizar uma lista vazia de usuarios
  Então o sistema retorna a mensagem: não existem usuarios para serem exibidos, cadastre um novo usuário

 @lista6Usuarios
 Cenario: Devem existir opções para exibir detalhes e excluir usuários
  Quando visualizar a lista com todos usuários
  Então devem estar visiveis as opções para ver detalhes e excluir os usuarios

 @lista4Paginas
 Cenario: Devem estar habilitadas as funções de avançar e retornar entre as paginas da lista de usuarios 
  Quando visualizar a lista com todos usuários
  Então devem estar habilitadas as funções de avançar e retornar entre as páginas

 @lista6Usuarios
  Cenario: Devem estar desabilitadas as funções de avançar e retornar paginas caso tenha somente 6 ou menos usuários
  Quando visualizar a lista com todos usuários
  Então as funções de avançar e retornar paginas devem estar desabilatadas 


