import http from "http";
import fs from "fs";
import { StringDecoder } from "string_decoder";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method.toUpperCase();

  if (url === "/") {
    res.write(`
        <html>
            <head>
                <title> Home page </title>
            </head>
            <body>
                <h1> Home page </h1>
                <form action="/create-user" method="post">
                    <h2> Create user </h2>
                    <input type="text" name="user">
                    <input type="submit" value="Submit">
                </form>
            </body>
        </html>
        `);
    return res.end();
  }
  if (url === "/users") {
    res.write(`
        <html>
            <head>
                <title> Users </title>
            </head>
            <body>
                <h1> Users </h1>
                <ul>
                    <li> User 1 </li>
                </ul>
            </body>
        </html>
        `);
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const decoder = new StringDecoder("utf-8");
    let body = "";

    req.on("data", (chunk) => {
      body += decoder.write(chunk);
    });

    req.on("end", () => {
      const user = body.split("=")[1];
      fs.writeFileSync("users.txt", user);
      console.log(user);
      res.writeHead(302, {
        Location: "/",
      });
      return res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
