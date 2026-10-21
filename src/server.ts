import express, { type Request, type Response } from "express";
import { clienteRouter } from "../src/routes/cliente.route.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/clientes", clienteRouter);

app.listen(port, () => console.log(`API rodando em http://localhost:${port}`));

