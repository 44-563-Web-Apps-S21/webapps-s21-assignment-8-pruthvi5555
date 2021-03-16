const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head><style>table { margin-top:30;margin-left:50px; border: solid 4px rgb(105,206,145)}</style> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>')
      res.write('<tr><th>Location </th> <th> Number of hours that <br> visitor should spend </th> <th> Amount of money someone <br> is expected to pay</th> </tr>  \n')
      res.write('<tr><td>Pune   </td> <td> 14hours </td><td> $350 </td> </tr>')
      res.write('<tr><td>New Delhi   </td> <td> 16hours </td> <td> $300 </td>')
      res.write('<tr><td>Banglore   </td> <td> 14hours </td> <td> $290 </td>')
      res.write('<tr><td>Mumbai   </td> <td> 12hours </td> <td> $300 </td>')  
      res.write('<tr><td>Hyderabad   </td> <td> 15hours </td> <td> $ 310 </td>')
      res.write('</table>')  
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})