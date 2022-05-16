const fs = require('fs');
const path= require('path');

//Criar uma pasta

fs.mkdir(path.join(__dirname,'/teste'), (error) => {
 if(error){
  return  console.log('Error: '+error)
 }
console.log('pasta criada com sucesso');
})

//Criar um arquivo
//fs.writeFile(path.join(__dirname,'/teste','teste.html'), "hello node", (error)=>{
 //   if(error){
  //    return  console.log('error: '+ error)
  //  }
  //  console.log("arquivo criado com sucesso");
//})
//adicionar á um arquivo

fs.appendFile(path.join(__dirname, 'teste','teste.html'),' hello word',(error) =>{
    if(error){
        return console.log('error ' + error)
    }
    console.log('criado o arquivo com sucesso');
})

//ler arquivo

fs.readFile(path.join(__dirname, '/teste', 'teste.html' ), (error,data) =>{
    if(error){
        return console.log('error ', error);
    }
    console.log(data);
})