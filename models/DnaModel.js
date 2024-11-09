const mongoose = require('mongoose');

const dnaSchema = new mongoose.Schema({
    sequence: { type: String, unique: true },
    isMutant: Boolean
});

const Dna = mongoose.model('Dna', dnaSchema);

module.exports = Dna;
