const conexao = require('../infra/mysql');
const Quantidade = require('./quantidade');

class Morador {

    post(body, res) {
        conexao.query('SELECT m.email FROM morador m;', (err, resultado) => {
            for (let k = 0; k < resultado.length; k++) {
                if (body.email === resultado[k].email) { 
                    console.log("Email ja cadastrado"); 
                } else {
                    console.log("ok");
                }
            }
            conexao.query('INSERT INTO morador SET ?', body, (err) => {
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
        conexao.query('SELECT * FROM morador',  (error, resultado) => {
            if (error) {
                res.status(400).json(error);
            } else {
                const generos = Quantidade.quantidadePorGenero(resultado);
                const idades = Quantidade.quantidadePorIdade(resultado);
                const body = {
                    idades: idades,
                    generos: generos,
                    total: resultado.length
                }
                res.status(201).json({
                    moradores: body
                });
            }
        });      
    }

    getById(id, res) {
        conexao.query(`SELECT * FROM morador WHERE morador_id = ${id}`,  (error, resultado) => {
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
        conexao.query(`SELECT * FROM morador m WHERE m.email = '${body.email}'`, (err, result) => {
            console.log("resultado", result);
            if (result === []) {
                res.status(400).send({
                    message: 'Email não encontrado'
                });
            } else {
                if (body.senha === result[0].senha) {
                    res.status(200).send({
                        message: 'Login efetuado com sucesso',
                        morador: result
                    });
                } else {
                    res.status(400).send({
                        erro: 'Senha incorreta'
                    });
                }
            }
        console.log("error", err)
        });
    }

    getAreas(res) {
        conexao.query('SELECT * FROM areas_comuns',  (error, resultado) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json({
                    areas: resultado
                });
            }
        });
    }

    reservarArea(body, res) {
        conexao.query('INSERT INTO reservas SET ?', body, (err) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json({
                    message: "Reserva feita com sucesso",
                    data: body.reserva_data,
                    area: body.area
                });
            }
        });
    }
    
}

module.exports = new Morador;