const express= require("express");

const Usermodel= require('../src/models/user.models');
const app = express();

app.get('/home', (req,res) => {
    res.contentType("application/html");
    res.status(200).send('<h1>hello word </h1>');

});
app.get('/users', (req,res) => {
    const users = [
        {
            name:'gustavo',
            email:'suportemgsis@hotmail.com',

        },
        {
            name:'james doe',
            email:'james@.com',
        }
    ];
    res.status(200).json(users);
});
app.post('/users', async (req,res) => {
 try{
      const user=  await Usermodel.create(req.body);
  res.status(201).json(user);
 } catch(error){
  res.status(500).send(error.message);
 }
})
const port=8080;
app.listen(port, () => console.log(`rodado com express na port ${port}`))