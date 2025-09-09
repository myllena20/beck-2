//import colecaoUf from './dados/dados.js';
import express from 'express';
import { buscarUfs, buscarUfsPorId, buscarUfsPorNome, buscarUfsPorSigla } from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUf = req.query.busca;
    const resultado  = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
    const siglauf = req.query.buscar;
    const resultad_uf =siglauf ? buscarUfsPorSigla(siglauf) : buscarUfs();

    if (resultado.length > 0) {
        res.json(resultado);
    } else{
        res.status(404).send({"erro": "nenhuma UF encontrada"});
    }
});

app.get('/ufs/:siglauf', (req, res) => {
    const siglauf = req.params.siglauf;
    const resultado_uf = buscarUfsPorSigla(siglauf);

    
    if (resultado_uf) {
        res.json(resultado_uf);
    } else if (isNaN(parseInt(siglauf))) {
        res.status(400).send({ "erro": "requisiçao invalida"});
    } else {
        res.status(404).send({ "erro": "UF não encontrada"});
    }
});

app.get('/ufs/:iduf', (req, res) => {
    const idUF = req.params.iduf
    const uf = buscarUfsPorId(idUf);

    
    if (uf) {
        res.json(uf);
    } else if (isNaN(parseInt(req.params.iduf))) {
        res.status(400).json({ "erro": "requisiçao invalida"});
    } else {
        res.status(404).json({ "erro": "UF não encontrada"});
    }
});

app.listen(8080, () => {
    console.log('servidor iniciado na porta 8080 ');
});