import { Router } from "express";

import * as ApiController from '../controllers/apiController'

const router = Router()

router.get('/pessoas', ApiController.listarUsuarios)
router.post('/pessoas', ApiController.novoUsuario)


export default router