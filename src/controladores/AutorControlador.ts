import {  Request, Response } from "express";
import { autores } from "../bancodedados";

export default class AutorControlador {
  listar(req: Request, res: Response){
     res.json(autores);
  }
}
