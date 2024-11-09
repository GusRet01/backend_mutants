const isMutant = (dna) => {
    const n = dna.length;
    let sequences = 0;

    // Verifica si hay una secuencia horizontal de cuatro letras idénticas
    const checkHorizontal = (i, j) => {
        return j + 3 < n &&
            dna[i][j] === dna[i][j + 1] &&
            dna[i][j] === dna[i][j + 2] &&
            dna[i][j] === dna[i][j + 3];
    };

    // Verifica si hay una secuencia vertical de cuatro letras idénticas
    const checkVertical = (i, j) => {
        return i + 3 < n &&
            dna[i][j] === dna[i + 1][j] &&
            dna[i][j] === dna[i + 2][j] &&
            dna[i][j] === dna[i + 3][j];
    };

    // Verifica si hay una secuencia diagonal hacia la derecha de cuatro letras idénticas
    const checkDiagonalRight = (i, j) => {
        return i + 3 < n && j + 3 < n &&
            dna[i][j] === dna[i + 1][j + 1] &&
            dna[i][j] === dna[i + 2][j + 2] &&
            dna[i][j] === dna[i + 3][j + 3];
    };

    // Verifica si hay una secuencia diagonal hacia la izquierda de cuatro letras idénticas
    const checkDiagonalLeft = (i, j) => {
        return i + 3 < n && j - 3 >= 0 &&
            dna[i][j] === dna[i + 1][j - 1] &&
            dna[i][j] === dna[i + 2][j - 2] &&
            dna[i][j] === dna[i + 3][j - 3];
    };

    // Itera sobre cada posición en la matriz de ADN
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (checkHorizontal(i, j) || checkVertical(i, j) || checkDiagonalRight(i, j) || checkDiagonalLeft(i, j)) {
                sequences++;
                if (sequences > 1) return true; // Devuelve true si se encuentran más de una secuencia
            }
        }
    }

    return false; // Devuelve false si no se encuentran más de una secuencia
};

module.exports = isMutant;


