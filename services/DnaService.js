const Dna = require('../models/DnaModel');

const addDna = async (dna, isMutant) => {
    const sequence = dna.join(',');
    const existingDna = await Dna.findOne({ sequence });

    if (!existingDna) {
        const newDna = new Dna({ sequence, isMutant });
        await newDna.save();
        console.log('Se agrego una secuencia de ADN');
    } else {
        console.log('Ya existe la secuencia de ADN');
    }
};

const getStats = async () => {
    const countMutantDna = await Dna.countDocuments({ isMutant: true });
    const countHumanDna = await Dna.countDocuments({ isMutant: false });
    const ratio = countMutantDna / (countMutantDna + countHumanDna);
    return {
        count_mutant_dna: countMutantDna,
        count_human_dna: countHumanDna,
        ratio: ratio
    };
};


module.exports = { addDna, getStats };
