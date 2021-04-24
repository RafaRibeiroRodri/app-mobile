const express = require('express');
const router = express.Router();
const Morador = require('../controller/morador');
const Mural = require('../controller/mural');
const Suporte = require('../controller/suporte');

//admin
//post de moradores
router.post('/morador/registro', (req, res) => {
    const body = req.body;
    console.log(body);
    Morador.post(body, res);
})

//get de moradores
router.get('/morador/dados', (req, res) => {
    Morador.get(res);
})

//post de noticias para o mural
router.post('/noticias/registro', (req, res) => {
    const body = req.body;
    console.log(body);
    Mural.muralPost(body, res);
})

//--------------------------------------------------------------------------------------------------------------------------------
//users
//get de moradores individuais
router.get('/morador/dados/:morador_id', (req, res) => {
    const id = req.params.morador_id
    Morador.getById(id, res);
})

//post de login
router.post('/morador/login', (req, res) => {
    try {
        const body = req.body;
        console.log(body);
        Morador.login(body, res);
    } catch (error) {
       console.log("error", error); 
    }
})

//get de noticias para o mural
router.get('/noticias', (req, res) => {
    Mural.muralGet(res);
})

//post de reclamação/sugestão para o suporte
router.post('/suporte', (req, res) => {
    const body = req.body;
    console.log(body);
    Suporte.suportePost(body, res);
})




module.exports = router;