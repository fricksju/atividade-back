import express from "express";
import router from "./router-usuarios.js";

const app = express();
app.use(express.json());

app.use("/usuarios", router)


app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
