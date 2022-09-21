You are asked to implement an HTTP server with Node.js APIs for serving `planets` data.

**Note: You are not allowed to use any framework. (e.g Express, Koa, Hapi etc)**
<br/><br/>

### Supported requests:

**Get the home page**:

_`Request`_

    GET /
    curl -i -H 'Accept: text/plain' http://127.0.0.1:PORT/

<br/><br/>
**Get the list of planets:**

_`Request`_

    GET /planets/
    curl -i -H 'Accept: application/json' http://127.0.0.1:PORT/planets

<br/><br/>
**Update an existing planet:**

_`Request`_

    POST /planet
    curl -i -H 'Accept: application/json' -d 'surface_water=22' http://127.0.0.1:PORT/planet/2

<br/><br/>

### Tasks:

Open `server.js` file and complete the following tasks:

1. Get the PORT number from the command line parameters.

```
    e.g node server.js PORT=8801
```

2. Create the HTTP server and listen to the PORT from the command line parameters.

3. Create the handler for the `/` GET request and return the contents from `index.html` file.

4. Create the handler for the `/planets` GET request and return the planets found in the `data/planets.json` file which their population is greater than zero.

5. Create the handler for the `/planet` POST request passing the __surface_water__ as parameter and return the following data:

```js
{
    "success": true,
    "message": "Planet updated. Surface water new value: {surface_water}"
}
```

**__Note__**: You dont have to edit the planets.json file.

In any other requests to the server (e.g GET /notFound) return the message: `Page not found` with HTTP status code 404.

6. Continue the test file implementation placed in `tests/server.spec.js` (bonus)

<br><br/>
**_Good luck!_**
