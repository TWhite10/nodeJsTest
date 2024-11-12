const http = require('http');
const hostname = '127.0.0.1';
const port = 3001;

//try out the two server functions and the output 
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World!\n');
//   }); 
//server two 
const server = http.createServer((req, res) => { 
    const url = req.url;

    const navbar = 
     ` <nav style = ' background-image: linear-gradient(180deg,#c4b6fd, #93acfc); padding:25px;' >
        <a href='/' style = 'color: black;font-weight: bold; text-decoration:none; padding:5px'>Home</a>  
        <a href='/random-number'   style = 'color: black; font-weight: bold;text-decoration:none; padding:5px'>Random Number</a> 
        <a href='/time' style = 'color: black; font-weight: bold; text-decoration:none; padding:5px'>Time</a> 

     </nav>`

    ;

 

    if (url === '/'){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(navbar)
      res.write('<h1 style="color: red">Hello World!</h1>');
      res.write('<p>Welcome to the main page !!!</p>');
      res.end();
    }
    else if (url === '/random-number'){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(navbar)
      const randomNumber = Math.floor(Math.random() * 100);
      res.write(`<h1 style="color: red">Welcome to find a Random Number!</h1>`);
      res.write(`<h3 style="color: blue">Your Random Number is:${randomNumber}</h3>`);
      res.write('<p>Refresh the page for a new number</p>');
      res.end();
    }
    else if (url === '/time'){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.write(navbar)
      const time = new Date().toLocaleTimeString().slice(0,8)
      res.write(`<h1 style="color: red">The time is!${time}</h1>`);
      res.write('<p>Refresh the page for updated time. </p>');
      res.end();
    }
    else {
      res.writeHead(404,{'Content-Type':'text/html'});
      res.write(navbar)
      res.write(`<h1>Page Not Found :( </h1>`);
      res.end();
    }
  });
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
