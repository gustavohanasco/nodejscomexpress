const http = require('http');
const port= 8080;
const server= http.createServer((req,res) => {
    if(req.url === '/home'){
        res.writeHead(200,{'Content-Type': 'text.html'});
        res.end('<h1>home page</h1>')
    }
    if(req.url === '/users'){
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
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(users));
    }
})
server.listen(port, () => console.log(`rodando na porta ${port}`));