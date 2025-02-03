import { clear, print, getPositiveNumber, getNumber, getData } from './functions.js';

function criarMatriz(dados) {
    return dados.split('\n')
        .filter(linha => linha.trim() !== '')
        .map(linha => linha.split(';'));
}

function topBrasil(matriz) {
    console.clear();
    const N = getPositiveNumber(getNumber('Top N escolas: '));
    const resposta = matriz.slice(0, N).map((escola, i) => `${i + 1}: ${escola[1]} > ${escola[7]}`).join('\n');
    print(resposta);
    clear();
}

function topArea(matriz) {
    console.clear();
    const N = getPositiveNumber(getNumber('Top N por área: '));
    print(`
        8 - Linguagens
        9 - Matemática
        10 - Ciências da Natureza
        11 - Humanas
        12 - Redação
    `);
    const area = getPositiveNumber(getNumber('> '));
    const notasOrdenadas = matriz.map(escola => parseFloat(escola[area]))
        .sort((a, b) => b - a);
    const resposta = notasOrdenadas.slice(0, N).map((nota, i) => `${i + 1} --> ${nota}`).join('\n');
    print(resposta);
    clear();
}

function topEstado(matriz) {
    console.clear();
    const N = getPositiveNumber(getNumber('Top N por estado: '));
    const estado = getData('Estado (PI, SP, RJ): ');
    const resposta = matriz.filter(escola => escola[3] === estado)
        .slice(0, N)
        .map(escola => `${escola[1]} > ${escola[7]}`).join('\n');
    print(resposta);
    clear();
}

function escolasPorRenda(matriz) {
    console.clear();
    const estado = getData('Estado (PI, SP, RJ): ');
    const escolasEstado = matriz.filter(escola => escola[3] === estado)
        .sort((a, b) => parseFloat(b[6]) - parseFloat(a[6]));
    const resposta = escolasEstado.map((escola, i) => `${i + 1} - ${escola[1]} (Renda: ${escola[6]})`).join('\n');
    print(resposta);
    clear();
}

function mediaPorArea(matriz) {
    console.clear();
    print(`
        8 - Linguagens
        9 - Matemática
        10 - Ciências da Natureza
        11 - Humanas
        12 - Redação    
    `);
    const area = getPositiveNumber(getNumber('> '));
    const somaNotas = matriz.reduce((acc, escola) => acc + parseFloat(escola[area]), 0);
    const media = somaNotas / matriz.length;
    print(`Média > ${media.toFixed(2)}`);
    clear();
}

function melhorAreaEstado(matriz) {
    console.clear();
    print(`
        8 - Linguagens
        9 - Matemática
        10 - Ciências da Natureza
        11 - Humanas
        12 - Redação    
    `);
    const area = getPositiveNumber(getNumber('> '));
    const estado = getData('(ex: PI, RS, AM) > ');
    const escolasEstado = matriz.filter(escola => escola[3] === estado);
    const escolaMelhorNota = escolasEstado.reduce((melhor, escola) => {
        const nota = parseFloat(escola[area]);
        return nota > melhor.nota ? { nome: escola[1], nota } : melhor;
    }, { nome: '', nota: -Infinity });
    print(`
        Escola: ${escolaMelhorNota.nome}
        Nota: ${escolaMelhorNota.nota}
    `);
    clear();
}

function estadoRede(matriz) {
    console.clear();
    const estado = getData('(PI, PE, RN) > ');
    print(`
        1 - Privada
        2 - Pública
    `);
    const rede = getPositiveNumber(getNumber('> '));
    const escolasEstado = matriz.filter(escola => escola[3] === estado);
    const melhorEscola = rede === 1 ? melhorEscolaPrivada(escolasEstado) : melhorEscolaPublica(escolasEstado);
    print(`
        Escola: ${melhorEscola.nome}
        Nota: ${melhorEscola.nota}
    `);
    clear();
}

function melhorEscolaPrivada(escolasEstado) {
    return escolasEstado.filter(escola => escola[4] === 'Privada')
        .reduce((melhor, escola) => {
            const nota = parseFloat(escola[7]);
            return nota > melhor.nota ? { nome: escola[1], nota } : melhor;
        }, { nome: '', nota: -Infinity });
}

function melhorEscolaPublica(escolasEstado) {
    return escolasEstado.filter(escola => escola[4] !== 'Privada')
        .reduce((melhor, escola) => {
            const nota = parseFloat(escola[7]);
            return nota > melhor.nota ? { nome: escola[1], nota } : melhor;
        }, { nome: '', nota: -Infinity });
}

function mostrarEscola(matriz) {
    console.clear();
    const nome = getData('Nome da escola > ');
    const escola = matriz.find(escola => escola[1] === nome);
    if (escola) {
        print(escola.join(' | '));
    } else {
        print('Escola não encontrada');
    }
    clear();
}

function rankingEstado(matriz) {
    console.clear();
    const estado = getData('Estado (PI, SP, RJ): ');
    const resposta = matriz.filter(escola => escola[3] === estado)
        .map((escola, i) => `${i + 1} > ${escola[1]}`).join('\n');
    print(resposta);
    clear();
}

function rankingRegiao(matriz) {
    console.clear();
    const N = getPositiveNumber(getNumber('Top N por região: '));
    print(`
        1 - Sul
        2 - Sudeste
        3 - Centro Oeste
        4 - Nordeste
        5 - Norte
    `);
    const regiao = getPositiveNumber(getNumber('> '));
    switch (regiao) {
        case 1: topSul(N, matriz); break;
        case 2: topSudeste(N, matriz); break;
        case 3: topCentroOeste(N, matriz); break;
        case 4: topNordeste(N, matriz); break;
        case 5: topNorte(N, matriz); break;
    }
    clear();
}

function topSul(N, matriz) {
    const sul = ['PR', 'SC', 'RS'].map(uf => matriz.filter(escola => escola[3] === uf))
        .flat()
        .slice(0, N)
        .map((escola, i) => `${i + 1} - ${escola[1]} > ${escola[3]}`).join('\n');
    print(sul);
}

function topSudeste(N, matriz) {
    const sudeste = ['ES', 'MG', 'SP', 'RJ'].map(uf => matriz.filter(escola => escola[3] === uf))
        .flat()
        .slice(0, N)
        .map((escola, i) => `${i + 1} - ${escola[1]} > ${escola[3]}`).join('\n');
    print(sudeste);
}

function topCentroOeste(N, matriz) {
    const centroOeste = ['GO', 'MT', 'MS'].map(uf => matriz.filter(escola => escola[3] === uf))
        .flat()
        .slice(0, N)
        .map((escola, i) => `${i + 1} - ${escola[1]} > ${escola[3]}`).join('\n');
    print(centroOeste);
}

function topNordeste(N, matriz) {
    const nordeste = ['AL', 'BA', 'CE', 'MA', 'PI', 'PB', 'PN', 'RN', 'SE'].map(uf => matriz.filter(escola => escola[3] === uf))
        .flat()
        .slice(0, N)
        .map((escola, i) => `${i + 1} - ${escola[1]} > ${escola[3]}`).join('\n');
    print(nordeste);
}

function topNorte(N, matriz) {
    const norte = ['AC', 'AP', 'AM', 'PA', 'RO', 'RR', 'TO'].map(uf => matriz.filter(escola => escola[3] === uf))
        .flat()
        .slice(0, N)
        .map((escola, i) => `${i + 1} - ${escola[1]} > ${escola[3]}`).join('\n');
    print(norte);
}

export {
    mediaPorArea,
    melhorAreaEstado,
    mostrarEscola,
    rankingEstado,
    rankingRegiao,
    topArea,
    topBrasil,
    criarMatriz,
    topEstado,
    estadoRede,
    escolasPorRenda
};
