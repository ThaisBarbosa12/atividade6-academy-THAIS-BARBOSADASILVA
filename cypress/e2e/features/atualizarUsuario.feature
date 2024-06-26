# language: pt

Funcionalidade: Atualizar Usuario

 Contexto: Acessar a funcionalidade de buscar usuarios
  Dado que acessei a função de ver detalhes de um usuario cadastrado

 @CriarUsuario
 Cenario: Deve ser possível atualizar os dados de um usuario com nome e email válidos
  E acessei a função editar
  Quando alterar os valores dos campos de nome e email com dados validos 
  E selecionar a função salvar
  Então  o sistema retorna o alerta de informações atualizadas com sucesso

 @CriarUsuario
  Esquema do Cenario: Não deve ser possível atualizar o email de um usuario para um email com formato invalido
  E acessei a função editar
  Quando alterar o campo email para um email "<email>" com formato invalido
  E selecionar a função salvar
  Então Então o sistema retorna a mensagem de erro informando que o formato de e-mail é invalido
    Exemplos:
    |    email    | 
    | @teste.com  |
    |    .com     |
    |   t@tio     |
    | thai.com.br | 
    |  .com@teste | 
 
 @CriarUsuario
  Esquema do Cenario: Não deve ser possível atualizar o nome de um usuario para um nome com formato invalido
  E acessei a função editar
  Quando alterar o campo nome para um nome "<nome>" com formato invalido
  E selecionar a função salvar
  Então o sistema retorna a mensagem de erro informando que o formato de nome é invalido
    Exemplos:
    |  nome  | 
    | 12Tha  |
    |  @jkls |
    | #thi-85|
    | /thai  | 
    |  23@3  | 

  @CriarUsuario
  Cenario: Não deve ser possível atualizar os dados de um usuario caso seu id seja invalido
  Quando buscar por este usuário com um id invalido
  Então o sistema exibe a mensagem de usuário não encontrado, informando que não foi possível localizar o usuário

@CriarUsuario @EmailEmUso
  Cenario: Não deve ser possível atualizar o email de um usuário para um email já cadastrado
  E acessei a função editar
  Quando alterar o campo email para um email já cadastrado por outro usuario
  E selecionar a função salvar
  Então o sistema retorna o alerta este e-mail já é utilizado por outro usuário

@CriarUsuario
  Cenario: Deve ser possível atualizar o nome de um usuário para um nome com 100 caracteres 
  E acessei a função editar
  Quando alterar o campo nome para um nome com 100 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvabarbo"
  E selecionar a função salvar
  Então o sistema retorna o alerta de informações atualizadas com sucesso

@CriarUsuario
  Cenario: Não deve ser possível atualizar o nome de um usuário para um nome com mais de 100 caracteres 
  E acessei a função editar
  Quando alterar o campo nome para um nome com mais de 100 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvabarbos"
  E selecionar a função salvar
  Então o sistema retorna a mensagem dizendo que deve ser informado no máximo 100 caracteres para o nome

@CriarUsuario
  Cenario: Deve ser possível atualizar o email de um usuário para um email com 60 caracteres 
  E acessei a função editar
  Quando alterar o campo email para um para um email com 60 caracteres 
  E selecionar a função salvar
  Então o sistema retorna o alerta de informações atualizadas com sucesso
 
@CriarUsuario
  Cenario: Não deve ser possível atualizar o email de um usuário para um email com mais de 60 caracteres 
  E acessei a função editar
  Quando alterar o campo email para um para um email com mais de 60 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosad@gmail.com"
  E selecionar a função salvar
  Então o sistema retorna a mensagem dizendo que deve ser informado no máximo 60 caracteres para o email

@CriarUsuario 
 Cenario: Deve ser possível atualizar um usuário com nome que contenha 4 letras
  E acessei a função editar
  Quando informar o nome com 4 letras "DUDA"
  E selecionar a função salvar
  Então o sistema retorna o alerta de informações atualizadas com sucesso

@CriarUsuario 
 Cenario: Não deve ser possível atualizar um usuário com nome que contenha menos de 4 letras
  E acessei a função editar
  Quando informar o nome com menos de 4 letras "TOB"
  E selecionar a função salvar
  Então o sistema retorna a mensagem dizendo que deve ser informado no mínimo 4 caracteres para o nome

@CriarUsuario 
 Cenario: Não deve ser possível atualizar um usuario com o campo nome vazio
  E acessei a função editar
  Quando limpar o campo nome 
  E selecionar a função salvar
  Então o sistema retorna a mensagem dizendo o campo nome é obrigatório

@CriarUsuario 
 Cenario: Não deve ser possível atualizar um usuario com o campo email vazio
  E acessei a função editar
  Quando limpar o campo email 
  E selecionar a função salvar
  Então o sistema retorna a mensagem dizendo o campo email é obrigatório



