

const path = require('path');

//Apenas nome do arquivo
console.log(path.basename(__filename));

//nome do diretorio atual
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

//criar objeto path
console.log(path.parse(__filename));

//junta caminho de arquivo
console.log(path.join(__dirname, 'teste', 'teste.html'));