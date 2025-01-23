import { Router } from "express";
import AutorControlador from "./controladores/AutorControlador";
import PostControlador from "./controladores/PostControlador";

const rotas = Router();

const autorControlador = new AutorControlador();
const postControlador = new PostControlador();

rotas.get("/autores", autorControlador.listar);
rotas.get("/autores/:id", autorControlador.detalhar);
rotas.post("/autores/", autorControlador.cadastrar);
rotas.patch("/autores/:id", autorControlador.editar);
rotas.delete("/autores/:id", autorControlador.excluir);

rotas.get("/posts", postControlador.listar);
// rotas.get("/post/:id", postControlador.detalhar);
rotas.post("/post/", postControlador.cadastrar);

export default rotas;
