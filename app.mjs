import express from "express";

const app = express();

// app.use((req, res, next) => {
//   console.log("First middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Second middleware");
//   res.send('Done!')
// });

app.use('/users', (req, res, next) => {
    res.send("<h1>Users</h1>");
});

app.use('/', (req, res, next) => {
    res.send("<h1>Home</h1>");
});

app.listen(3000, () => console.log("Server is listening on port 3000"));
