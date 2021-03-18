const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML
const advices=["Your life is your responsibility.",
                "The way someone treats you is a reflection of how they feel about themselves.",
                "Life is all about managing expectations—most of all your own.",
                "When you know better, do better.",
                "Release the idea that things could've been any other way.",
                "Listen more than you speak."
            ];
            var randomNumber=Math.floor(Math.random()*6);
            res.write(`${advices[randomNumber]}`)
            res.end()
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})