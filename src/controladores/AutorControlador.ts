import { Request, Response } from "express";
import { autores } from "../bancodedados";
import Autor from "../modelos/Autor";

export default class AutorControlador {
  listar(req: Request, res: Response) {
    return res.json(autores);
  }

  detalhar(req: Request, res: Response) {
    const { id } = req.params;

    const autor = autores.find((elemento) => {
      return elemento.id === id;
    });

    if (!autor) {
      return res.status(404).json({
        mensagem: "Autor não encontrado!",
      });
    }

    return res.json(autor);
  }

  cadastrar(req: Request, res: Response) {
    const { nome, idade } = req.body;

    if (!nome || !idade) {
      return res.status(400).json({
        mensagem: "O nome e idade do autor são obrigatórios",
      });
    }

    const autor = new Autor({ nome, idade });

    autores.push(autor);
    return res.json({
      mensagem: "Autor cadastrado com sucesso",
    });
  }

  editar(req: Request, res: Response) {
    const { nome, idade } = req.body;
    const { id } = req.params;

    if (!nome || !idade) {
      return res.status(400).json({
        mensagem: "O nome e a idade do autor são obrigatórios!",
      });
    }

    const autor = autores.find((elemento) => {
      return elemento.id === id;
    });

    if (!autor) {
      return res.status(404).json({
        mensagem: "Autor não encontrado!",
      });
    }

    autor.nome = nome;
    autor.idade = idade;

    return res.status(204).send();
  }
  excluir(req: Request, res: Response) {
    const { id } = req.params;

    const autorIndice = autores.findIndex((elemento) => {
      return elemento.id === id;
    });

    if (autorIndice === -1) {
      return res.status(404).json({
        mensagem: "Autor não encontrado!",
      });
    }

    autores.splice(autorIndice, 1);

    return res.status(204).send();
  }
}
