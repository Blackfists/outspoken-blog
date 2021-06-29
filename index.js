const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 5500;
const home = fs.readFileSync('./index.html');
const about = fs.readFileSync('./about.html');
const blog = fs.readFileSync('./blog.html');
const contact = fs.readFileSync('./contact.html');
const games = fs.readFileSync('./games.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if(url == '/'){
        res.end(home);
    }

    else if (url == './blog.html'){
        res.end(blog);
    }

    else if (url == './about.html'){
        res.end(about);
    }

    else if (url == './contact.html'){
        res.end(contact);
    }
    else{
        res.end("<h1> 404 error not found </h1>")
    }
})

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})