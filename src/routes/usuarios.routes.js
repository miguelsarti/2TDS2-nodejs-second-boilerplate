import { Router } from "express";
import UsersRepository from "../models/users/usersRepository.js";

const usuariosRoutes = Router();

const usersRepository = new UsersRepository();

let usuario = []

usuariosRoutes.get("/", (req, res) => {
    const usuarios = usersRepository.getAllUsers;

    return res.status(200).json({
        message: 
        usuarios.length == 0 
        ? "Não há usuários cadastrados" 
        : `Total de usuários: ${usuarios.length}`,
        usuario
        }
    );
});

export default usuariosRoutes;
