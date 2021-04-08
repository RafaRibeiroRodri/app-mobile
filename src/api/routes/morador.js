const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({
        message: "rota de dados pessoais"
    });
});

router.post('/', (req, res) => {
    const httpreq = {
        email: req.body.email,
        senha: req.body.senha
    }
    res.status(201).send({
        message: "rota de login",
        morador: httpreq
    });
});

router.get('/:morador_id', (req, res) => {
    const id = req.params.morador_id

    if(id === "teste") {
        res.status(200).send({
            message: "rota get com id de teste",
            id: id
        });
    } else {
        res.status(200).send({
            message: "rota get com id",
            id: id
        });
    }
});

module.exports = router;