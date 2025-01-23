import { Request, Response } from "express";
import { posts } from "../bancodedados";

export default class PostControlador{
  listar(req: Request, res: Response){
    return res.json(posts)
  }
  
}