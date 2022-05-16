const mongoose= require('mongoose');
const connectToDatabase= async() => {
    await mongoose.connect(`mongodb+srv://admin:mgsis=2004@cluster0.ugjbx.mongodb.net/database?retryWrites=true&w=majority`, (error) =>{
        if(error){
         return   console.log('error:' , error);
    }
      return  console.log('conectado com sucesso');
    });
};
module.exports = connectToDatabase;