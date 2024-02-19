import { Request, Response } from "express";
import { Pessoas } from '../models/Pessoas'
import { Op } from "sequelize";

export const novoUsuario = async (req: Request, res: Response) => {
    try {
        let {nome, cpf, rg, dataNascimento, sexo } = req.body
        let newUser = await Pessoas.create({ nome, cpf, rg, dataNascimento, sexo })
        res.status(201)
        res.json({id: newUser.id, nome, cpf, rg, dataNascimento, sexo })
    } catch (error) {console.log(error)}
    
}

export const listarUsuarios = async (req: Request, res: Response) => {
    try {
        let list = await Pessoas.findAll()
        res.json({ list })
    } catch (error) {console.log(error)}
}

export const listarNome = async (req: Request, res: Response) => {
    try {
        let {nome} = req.params
        let user = await Pessoas.findOne({
            where: {nome: { [Op.iLike]: `%${nome}%` }}
        })
        
        res.json({user})

    } catch (error) 
    {console.log(error)}

}

export const listarCpf = async (req: Request, res: Response) => {
    try {
        let {cpf} = req.params
        let user = await Pessoas.findOne({
            where: {cpf}
        })
        
        res.json({user})

    } catch (error) 
    {console.log(error)}
}

export const updateUsuario = async (req: Request, res: Response) => {
    try {
        let { id } = req.params
        let {nome, cpf, rg, dataNascimento, sexo} = req.body

        let user = await Pessoas.findByPk(id)
        if(user) {
            await user.update({
                nome,
                rg,
                cpf,
                dataNascimento,
                sexo
            })

            res.json({pessoa: user})

        } else {res.json({error: 'Pessoa não encontrada'})}
        
    } catch(error) {
        console.log(error)
    }
}

export const deleteUsuario = async (req: Request, res: Response) => {
    let { id } = req.params

    await Pessoas.destroy({
        where: { id }
    })
    
    res.json({})    
}