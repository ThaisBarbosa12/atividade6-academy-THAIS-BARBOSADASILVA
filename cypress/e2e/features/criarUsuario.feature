# language: pt

Funcionalidade: Criação de usuario

 Contexto: Usuário deverá acessar a funcionalidade de cadastro
  Dado que acessei a funcionalidade de cadastro

 Cenario: Deve ser possível criar um usuário com nome e e-mail validos
  Quando informar o nome
  E informar o e-mail
  E salvar a operação
  Então o sistema retorna o alerta de usuário salvo com sucesso

 Cenario: Não deve ser possível criar um usuario com formato de e-mail invalido
  Quando informar o nome
  E informar o e-mail invalido "thais@teste"
  E salvar a operação
  Então o sistema retorna a mensagem de erro informando que o formato de e-mail é invalido

@usuarioExistente
 Cenario: Não deve ser possível criar um usuario com e-mail já utilizado por outro usuário
  Quando informar o nome
  E informar o e-mail já utilizado "thais@teste.com"
  E salvar a operação
  Então o sistema retorna o alerta este e-mail já é utilizado por outro usuário


 Cenario: Não deve ser possível cadastar um nome com mais de 100 caracteres.
  Quando informar um nome com mais de 100 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvathaisbarbosadasilvabarbos"
  E informar o e-mail
  E salvar a operação
  Então o sistema não permite concluir o cadastro ao extrapolar o limite de 100 caracteres no campo nome
  E retorna a mensagem dizendo que deve ser informado no máximo 100 caracteres para o nome
  

 Cenario: Não deve ser possível cadastar um e-mail com mais de 60 caracteres.
  Quando informar o nome 
  E informar o e-mail com mais de 60 caracteres "thaisbarbosadasilvathaisbarbosadasilvathaisbarbosad@gmail.com"
  E salvar a operação
  Então o sistema não permite concluir o cadastro ao extrapolar o limite de 60 caracteres no campo e-mail
  E retorna a mensagem dizendo que deve ser informado no máximo 60 caracteres para o email


 Cenario: Não deve ser possível cadastrar um usuário com nome que contenha menos de 4 letras
  Quando informar o nome com menos de 4 letras "BIA"
  E informar o e-mail
  E salvar a operação
  Então o sistema retorna a mensagem dizendo que deve ser informado no mínimo 4 caracteres para o nome


 Cenario: Não deve ser possível criar um usuario com o campo nome vazio
  Quando informar o e-mail
  E salvar a operação
  Então o sistema retorna a mensagem dizendo o campo nome é obrigatório


 Cenario: Não deve ser possível criar um usuario com o campo e-mail vazio
  Quando informar o nome
  E salvar a operação
  Então o sistema retorna a mensagem dizendo o campo e-mail é obrigatório