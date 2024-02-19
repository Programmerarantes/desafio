import { Request, Response } from "express";
import { Pessoas } from '../models/Pessoas'

export const novoUsuario = async (req: Request, res: Response) => {
    let {nome, cpf, rg, dataNascimento, sexo } = req.body
    let newUser = await Pessoas.create({ nome, cpf, rg, dataNascimento, sexo })

    res.status(201)
    res.json({id: newUser.id, nome, cpf, rg, dataNascimento, sexo })
}

export const listarUsuarios = async (req: Request, res: Response) => {
    let list = await Pessoas.findAll()
    
    res.json({ list })
}