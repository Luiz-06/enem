# Projeto de Análise de Dados do ENEM 2014

Este projeto permite realizar análises sobre os dados do Exame Nacional do Ensino Médio (ENEM) de 2014, com foco no desempenho das escolas participantes. Através de um menu interativo, o usuário pode consultar informações sobre as escolas, como as melhores classificações por área de conhecimento, estado, tipo de rede (pública ou privada), entre outros.

## Funcionalidades

O projeto oferece as seguintes opções de consulta:

1. **Top N Escolas no Brasil** - Exibe as N melhores escolas em todo o Brasil.
2. **Top N Escolas por Área de Conhecimento** - Exibe as N melhores escolas em uma área específica do ENEM (Linguagens, Matemática, Ciências da Natureza, Humanas, Redação).
3. **Top N Escolas por Estado** - Exibe as N melhores escolas em um estado específico.
4. **Listar Escolas por Renda no Estado** - Exibe as escolas ordenadas por renda em um estado específico.
5. **Média de Notas por Área de Conhecimento** - Exibe a média de notas de todas as escolas em uma área específica.
6. **Melhor Escola por Área e Estado** - Exibe a melhor escola de um estado em uma área específica.
7. **Melhor Escola por Estado e Tipo de Rede (Privada/Pública)** - Exibe a melhor escola de um estado considerando o tipo de rede.
8. **Buscar Escola pelo Nome** - Busca uma escola pelo nome e exibe suas informações detalhadas.
9. **Ranking de Escolas no ENEM por Estado** - Exibe o ranking das escolas de um estado específico.
10. **Ranking de Escolas no ENEM por Região** - Exibe o ranking das escolas de uma região específica (Sul, Sudeste, Centro-Oeste, Nordeste, Norte).
11. **Sair** - Finaliza a execução do programa.

## Tecnologias Utilizadas

- **JavaScript** (ES6+): Para o desenvolvimento da lógica do programa.
- **Node.js**: Para leitura de arquivos e execução do código.
- **CSV**: O arquivo de entrada é um CSV contendo dados sobre as escolas, como nome, estado, notas em diferentes áreas de conhecimento e tipo de rede.

## Estrutura do Projeto

O projeto possui os seguintes arquivos principais:

- **`index.js`**: Arquivo principal que executa o menu interativo e chama as funções correspondentes às opções selecionadas pelo usuário.
- **`functions.js`**: Contém funções auxiliares para leitura de dados, manipulação de números, e exibição de informações.
- **`options.js`**: Contém as funções que realizam as consultas específicas, como a ordenação das escolas e cálculo das médias.
- **`enem2014_nota_por_escola.txt.csv`**: Arquivo CSV contendo os dados das escolas.



