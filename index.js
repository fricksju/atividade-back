import express from "express";
import verificarAutenticacao from "./auth.js";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  console.log("Chamando API");
  next();
});

app.get("/usuarios", (req, res) => {
  const usuarios = [
    { id: 1, nome: "Gabigol" },
    { id: 2, nome: "Arrasca" },
    { id: 3, nome: "Bruno Henrique" }
  ];
  res.json(usuarios);
});

app.post("/usuarios", verificarAutenticacao, (req, res) => {
  res.status(201).json({ mensagem: "Rota permitida" });
});


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
