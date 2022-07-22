# PIN (Prontuário "Pessoal" Inteligente)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) 	![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white) ![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)

A saúde está em constante evolução, porém a tecnologia na área têm ousado pouco para facilitar o desenvolvimento da área e muitas vezes esbarra em limites de regulamentação. É sabido que uma das maiores fontes de inovação é a comunicação, porém o meio *health* é ainda permeado de patentes e funcionalidades. O **PIN** basea-se na ideia de inovação aberta para criar um sistema de prontuário **OpenSource** que facilitará a vida do profissional e dará ao usuário final novamente os seus dados de direito e abrirá a possibilidade de *skateholders* poderem criar partes dele, módulos, tanto pagos quanto gratuitos.

![Fluxograma de Funcionamento PIN](https://github.com/ORANGO-IO/PIN/blob/main/chart.png?raw=true)  

## Domain Data Driven

### Linguagem Ubíqua (Geral)

**Usuário** = Pessoas que vão instalar em sua máquina o PIN, ficando como administrador da função core, pode ser um programador ou dono de uma clínica por exemplo, ele é um usuário do PIN
**Pessoa** = É cada pessoa que é inserida no sistema PIN, uma pessoa tem pelo menos um cpf, nome e data de nascimento cadastrada. Ou é um RN de alguém que tenha essas informações
**Profissional** = Médico, enfermeiros, nutricionistas, fisioterapeutas ou outros profissionais de saúde que registrão

## Stack escolhida para uso e padronização

Como é um sistema `js` voltado para a comunidade poder desenvolver de forma fácil e organizada foram optadas por ferramentas que serão consideradas padrão no seu desenvolvimento e no desenvolvimento dos módulos, podendo pensar em flexibilizar posteriormente.  

- `typescript` como linguagem de desenvolvimento
- `react` como framework para frontend
- `styled-componenets` como estilização
- `apollo-server` tem uma ampla comunidade e suporte GraphQL