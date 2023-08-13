module.exports = {
    "url": "/register/update",
    "headers": {
        'Content-Type': 'application/json',
        'x-api-key': 'x-api-key'
    },
    "body": {
        "nome": "uuid Silva",
        "email": "uuid@example.com",
        "idade": 28,
        "senha": "senha123",
        "endereco": {
          "rua": "Rua das Flores",
          "numero": "123",
          "cidade": "Exemplolandia",
          "estado": "EX",
          "cep": "12345-678"
        }
      }
}