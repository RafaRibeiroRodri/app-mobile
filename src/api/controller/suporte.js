const conexao = require('../infra/mysql');

class Suporte {

    suportePost(body, res) {
        conexao.query('INSERT INTO suporte SET ?', body, (err) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json({
                    message: "Feedback enviado com sucesso",
                });
            }
        });
    }


}

module.exports = new Suporte;