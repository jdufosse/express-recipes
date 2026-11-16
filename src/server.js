import express, { json } from 'express';
const app = express()
const port = 3000

app.use(json());
app.use("/recipes", require("./routes/recipes.js").default);

app.listen(port);