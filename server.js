const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const isMutant = (dna) => {
    console.log("dna->" , dna);
    return true;
};

app.post('/mutant/', (req, res) => {
    const { dna } = req.body;
    if (isMutant(dna)) {
        res.status(200).send('Es un mutante');
    } else {
        res.status(403).send('No es un mutante');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
