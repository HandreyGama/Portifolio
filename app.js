import { acessarMeuPerfil, acessarMeusRepositorios } from './public/modules/api.js'

import express from 'express'
import path from 'path'


const app = express()
app.use(express.static(path.join(process.cwd(),"public")))
acessarMeusRepositorios()

app.listen(3000,() =>{
    console.log("* O app esta rodando!")
})