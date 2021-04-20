const mysql = require('../mysql').connection;

class Morador {

    post(body, res) {
        mysql.query('SELECT m.email FROM morador m;', (err, resultado) => {
            for (let k = 0; k < resultado.length; k++) {
                if (body.email === resultado[k].email) { 
                    res.status(400).json({ 
                        message: "Email ja cadastrado" 
                    }); 
                } else {
                    console.log("ok");
                }
            }
            mysql.query('INSERT INTO morador SET ?', body, (err) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(201).json({
                        message: "Usuário criado com sucesso",
                        morador: body
                    });
                }
            });
        });
    }

    get(res) {
        mysql.query('SELECT * FROM morador',  (error, resultado) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json({
                    morador: resultado
                });
            }
        });      
    }

    getById(id, res) {
        mysql.query(`SELECT * FROM morador WHERE morador_id = ${id}`,  (error, resultado) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json({
                    morador: resultado
                });
            }
        });      
    }


    login(body, res) {
        console.log("body", body);
        mysql.query(`SELECT * FROM morador m WHERE m.email = '${body.email}'`, (err, result) => {
            console.log("resultado", result);
            if (body.senha === result[0].senha) {
                res.status(200).send({
                    message: 'Login efetuado com sucesso',
                    morador: result
                });
            } else {
                res.status(400).send({
                    erro: 'Email ou senha incorreto'
                });
            }
        });
    }
    

}

module.exports = new Morador;