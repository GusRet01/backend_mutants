const { addDna, getStats } = require('../services/DnaService');
const isMutant = require('../services/MutantService');

const mutantPost = async (req, res) => {
    const { dna } = req.body;
    const result = isMutant(dna);
    await addDna(dna, result);
    if (result) {
        res.status(200).send('Es un mutante');
    } else {
        res.status(403).send('No es un mutante');
    }
};

const statsGet = async (req, res) => {
    try {
        const stats = await getStats();
        res.json(stats);
    } catch (err) {
        res.status(500).send(err);
    }
};


module.exports = { mutantPost, statsGet };
