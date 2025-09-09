import colecaoUf from '../dados/dados.js';

export const buscarUfs = () => {
    return colecaoUf;
}

export const buscarUfsPorNome = (nomeUf) =>{
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(nomeUf.toLowerCase()));
};

export const buscarUfsPorId = (id) => {
    const idUF = parseInt(id);
    return colecaoUf.find(uf.id === idUF);
}

export const buscarUfsPorSigla = (siglauf) => {
    return colecaoUf.filter(uf => uf.uf.toLowerCase().includes(siglauf.toLowerCase()))
} 