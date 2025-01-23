import { Router } from "express";
import AutorControlador from "./controladores/AutorControlador";
import PostControlador from "./controladores/PostControlador";

const rotas = Router();

const autorControlador = new AutorControlador();
const postControlador = new PostControlador();

rotas.get("/autores", autorControlador.listar);
rotas.get("/autores/:id", autorControlador.detalhar);
rotas.patch("/postagens/:id", autorControlador.editar);
rotas.delete("/postagens/:id", autorControlador.excluir);

rotas.get("/postagens", postControlador.listar);

export default rotas;
