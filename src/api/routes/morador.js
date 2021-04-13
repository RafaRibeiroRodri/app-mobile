const express = require('express');
const router = express.Router();
const mysql = require('../mysql').connection;

//post de moradores
router.post('/morador/registro', (req, res) => {
    console.log(req.body);
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO morador (email, senha, nome, cpf, rg, data_nasc, unidade, bloco, telefone, veic_placa, veic_modelo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [req.body.email, req.body.senha, req.body.nome, req.body.cpf, req.body.rg, req.body.data_nasc, req.body.unidade, req.body.bloco, req.body.telefone, req.body.placa, req.body.modelo],
            (error, resultado, field) => {
                conn.release();
                if(error) { return res.status(500).send({ error: error, response: null }); }
                res.status(200).send({
                    message: "Usuário criado com sucesso",
                    morador_id: resultado.insertId
                });
            }
        )        
    })
});

//get de moradores
router.get('/morador/dados', (req, res) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM morador',
            (error, resultado, field) => {
                console.log("resultado", resultado);
                conn.release();
                if(error) { return res.status(500).send({ error: error, response: null }); }
                res.status(200).send({
                    morador: resultado
                });
            }
        )        
    })
});

//get de moradores individuais


//post de noticias para o mural
router.post('/noticias/registro', (req, res) => {
    console.log(req.body);
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO noticias (conteudo) VALUES (?)',
            [req.body.conteudo],
            (error, resultado, field) => {
                conn.release();
                if(error) { return res.status(500).send({ error: error, response: null }); }
                res.status(200).send({
                    message: "Noticía inserida com sucesso",
                    morador_id: resultado.insertId
                });
            }
        )        
    })
});

//get de noticias para o mural
router.get('/noticias', (req, res) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM noticias',
            (error, resultado, field) => {
                console.log("resultado", resultado);
                conn.release();
                if(error) { return res.status(500).send({ error: error, response: null }); }
                res.status(200).send({
                    morador: resultado
                });
            }
        )        
    })
});

//post de reclamação/sugestão para o suporte
router.post('/suporte', (req, res) => {
    console.log(req.body);
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO suporte (nome, unidade, bloco, telefone, texto) VALUES (?, ?, ?, ?, ?)',
            [req.body.nome, req.body.unidade, req.body.bloco, req.body.telefone, req.body.texto],
            (error, resultado, field) => {
                conn.release();
                if(error) { return res.status(500).send({ error: error, response: null }); }
                res.status(200).send({
                    message: "Sua reclamação/sugestão foi enviada ao suporte",
                    morador_id: resultado.insertId
                });
            }
        )        
    })
});



module.exports = router;