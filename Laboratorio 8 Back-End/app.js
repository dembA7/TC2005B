console.log("Hello world");
console.info("Información");

const filesystem = require("fs");
filesystem.writeFileSync("hola.txt", "Hola desde node");

const http = require("http");

const server = http.createServer( (request, response) => {
    console.log(request.url);
    response.setHeader("Content-Type", "text/html");
    response.write("<h1>Header 1</h1>");
    response.write("<form>");

    let radios = 

    response.write("</form>")
    response.end();
});

server.listen(3000);

