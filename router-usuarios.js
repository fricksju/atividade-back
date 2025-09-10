import { listarUsuarios, criarUsuario } from "./controller-usuarios.js";
import { verificarAutenticacao } from "./auth.js";
import { rodarApi } from "./middleware.js";
import Router from "express";

const router = Router();  
router.use(rodarApi);

router.get("/", listarUsuarios);
router.post("/", verificarAutenticacao, criarUsuario);
export default router;