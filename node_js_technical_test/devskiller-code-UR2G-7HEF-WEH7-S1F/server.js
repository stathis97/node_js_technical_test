const http = require("http");
const url = require("url");
const fs = require("fs");
const querystring = require("querystring");
const path = require("path");
const planets = require("./data/planets.json");

// Provide implementations


var PORT;
const command_args = process.argv;   //TASK 1
command_args.forEach((element) => { //for each element in the command arguments array
  if (element.includes("PORT")) { //find the right argument
    var temp_string = element.substring(5); //get the port number only
    PORT = parseInt(temp_string)
  }

})
if (!PORT) PORT = 8081; //if port is undefined use 8081 as default


filePath = path.join(__dirname, 'index.html');



const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  const { pathname } = url.parse(req.url);


  if (pathname === '/') { //TASK 3
    res.writeHeader(200, { "Content-Type": "text/html" });

    fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) { //read the file
      if (!err) {
        res.write(data);
        res.end();
      } else {
        console.log(err);
      }
    });
    return;
  }


  if (pathname === '/planets') { //TASK 4 
    res.writeHeader(200, { "Content-Type": "application/json" });
    var array = [];
    for (key in planets) { //iterate the json object

      if (planets[key].population > 0) array.push(planets[key])
    }
    res.write(JSON.stringify(array))
    res.end();

    return;

  }

  if (pathname === '/planet') { //TASK 5 NOT COMPLETED   --suppose that the request is a GET request

    const queryObject = url.parse(req.url, true).query; //get the url parameters and store them to an object
    var param_id = parseInt(queryObject.id);
    var param_surface_water = queryObject.surface_water;
    for (key in planets) { //iterate the json object

      if (planets[key].id === param_id) { //find the 
        planets[key].surface_water = param_surface_water;

      }
    }
    res.write(JSON.stringify({
      "success": true,
      "message": "Planet updated. Surface water new value: {surface_water}"
  }))
    res.end();
    return;

  }

  res.writeHeader(404); //response to any other requests to the server
  res.write("Page not found")
  res.end();

}

const server = http.createServer(requestListener);
server.listen(PORT, () => {
  console.log(`Server is running at localhost:${PORT}`)
});   
