# language: pt

Funcionalidade: Atualizar Usuario

 Contexto: Acessar a funcionalidade de buscar usuarios
  Dado que possuo um usuario cadastrado e acessei funcionalidade de buscar usuarios

 @CriarUsuario
 Cenario: Deve ser possível atualizar os dados de um usuario com nome e email válidos
  E encontrei o usuario e selecionei a função de ver detalhes
  E selecionei a função editar
  Quando alterar os valores dos campos de nome e email com dados validos 
  E selecionar a função salvar
  Então  o sistema retorna o alerta de informações atualizadas com sucesso

#   Cenario: Não deve ser possível atualizar o email de um usuario para um email com formato invalido
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando alterar o campo email para um email "@teste.com" com formato invalido
#   E selecionar a função salvar
#   Então o sistema retorna a mensagem de erro informando que o formato de e-mail é invalido
 
#   Esquema do Cenario: Não deve ser possível atualizar o nome de um usuario para um nome com formato invalido
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando alterar o campo nome para um nome <nome> com formato invalido
#   E selecionar a função salvar
#   Então o sistema retorna a mensagem de erro informando que o formato de nome é invalido
#     Exemplos:
#     |  nome  | 
#     | 12Tha  |
#     |  @jkls |
#     | #thi-85|
#     | /thai  | 
#     |  23@3  | 

#   Cenario: Não deve ser possível atualizar os dados de um usuario caso ele não seja encontrado
#   Quando buscar pelo usuario e nao encontrá-lo
#   Então o sistema retorna a mensagem: não existem usuarios para serem exibidos, cadastre um novo usuário

 
#   Cenario: Não deve ser possível atualizar o email de um usuário para um email já cadastrado
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando alterar o campo email para um email já cadastrado por outro usuario
#   Então o sistema retorna o alerta este e-mail já é utilizado por outro usuário

 
#   Cenario: Não deve ser possível atualizar o nome de um usuário para um nome com mais de 100 caracteres 
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando alterar o campo nome para um nome com mais de 100 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvabarbos"
#   Então o sistema retorna a mensagem dizendo que deve ser informado no máximo 100 caracteres para o nome
 
 
#   Cenario: Não deve ser possível atualizar o email de um usuário para um email com mais de 60 caracteres 
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando alterar o campo email para um para um email com mais de 60 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosad@gmail.com"
#   Então o sistema retorna a mensagem dizendo que deve ser informado no máximo 60 caracteres para o email

 
#  Cenario: Não deve ser possível atualizar um usuário com nome que contenha menos de 4 letras
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando informar o nome com menos de 4 letras "TOB"
#   Então o sistema retorna a mensagem dizendo que deve ser informado no mínimo 4 caracteres para o nome

 
#  Cenario: Não deve ser possível atualizar um usuario com o campo nome vazio
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando limpar o campo nome e não informar um novo nome
#   E salvar a operação
#   Então o sistema retorna a mensagem dizendo o campo nome é obrigatório

 
#  Cenario: Não deve ser possível atualizar um usuario com o campo email vazio
#   E encontrei o usuario e selecionei a função de ver detalhes
#   E selecionei a função editar
#   Quando limpar o campo email e não informar um novo email
#   E salvar a operação
#   Então o sistema retorna a mensagem dizendo o campo email é obrigatório



