import { getNumber, getPositiveNumber, print } from './functions.js'
import * as option from './options.js'
import { readFileSync } from 'fs'

function exibirMenu() {
    return `
    1 - Top N Escolas no Brasil
    2 - Top N Escolas por Área de Conhecimento
    3 - Top N Escolas por Estado
    4 - Listar Escolas por Renda no Estado
    5 - Média de Notas por Área de Conhecimento
    6 - Melhor Escola por Área e Estado
    7 - Melhor Escola por Estado e Tipo de Rede (Privada/Pública)
    8 - Buscar Escola pelo Nome
    9 - Ranking de Escolas no ENEM por Estado
    10 - Ranking de Escolas no ENEM por Região
    100 - Sair
    `;
}

function main() {
    const dados = readFileSync('enem2014_nota_por_escola.txt.csv', 'utf-8')
    const matriz = option.criarMatriz(dados)

    while (true) {
        print(exibirMenu())
        const resposta = getPositiveNumber(getNumber('> '))

        switch (resposta) {
            case 1:
                option.topBrasil(matriz)
                break
            case 2:
                option.topArea(matriz)
                break
            case 3:
                option.topEstado(matriz)
                break
            case 4:
                option.escolasPorRenda(matriz)
                break
            case 5:
                option.mediaPorArea(matriz)
                break
            case 6:
                option.melhorAreaEstado(matriz)
                break
            case 7:
                option.estadoRede(matriz)
                break
            case 8:
                option.mostrarEscola(matriz)
                break
            case 9:
                option.rankingEstado(matriz)
                break
            case 10:
                option.rankingRegiao(matriz)
                break
            case 100:
                console.clear()
                print('Saindo...')
                return
            default:
                console.clear()
                print('Opção inválida. Tente novamente.')
                break
        }
    }
}

main()
