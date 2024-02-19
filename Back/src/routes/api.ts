import { Router } from "express";

import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/pessoas/cpf/:cpf', ApiController.listarCpf)
router.get('/pessoas/nome/:nome', ApiController.listarNome)
router.get('/pessoas', ApiController.listarUsuarios)
router.post('/pessoas', ApiController.novoUsuario)


export default router