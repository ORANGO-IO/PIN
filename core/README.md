# Aplicação Core

A aplicação core se preocupa em gerenciar as informações do **Domínio Principal** do sistema que são as *health Records* (registros em saúde) e os seus usuário associados. Também se preocupa em gerenciar a forma que os plugins conversarão entre si e fornecer recursos (interface API) para que os plugins saibam se algum outro plugin que ele gostaria de se conectar está disponível ou não na aplicação local.

### Contexto Delimitado

- Criação e gerenciamento de usuários
- Criar ambiente de desenvolvimento (SDK) que carregue as dependências básicas necessárias, simule um banco de dados fictício com dados do core para integração e forneça um `create-plugin` CLI para desenvolvimento da estrutura de pastas inicial e desenvolvimento.
- Migração do banco quando novos plugins são realizados
- Backup de registros em saúde, exportando para a Aplicação e Banco de dados criptografado em nuvem (por onde os pacientes poderão checar e ter seus dados de saúde em mãos através de sigilosa autenticação)
