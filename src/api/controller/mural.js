const mysql = require('../mysql').connection;

class Mural {

    muralPost(body, res) {
        mysql.query('INSERT INTO noticias SET ?', body, (err) => {
            if (err) {
                res.status(400).json(err);
            } else {
                res.status(201).json({
                    message: "Notícia inserida com sucesso",
                    noticia: body
                });
            }
        });
    }

    muralGet(res) {
        mysql.query('SELECT * FROM noticias limit 4',  (error, resultado) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json({
                    noticias: resultado
                });
            }
        });      
    }

    muralDelete(res) {
        mysql.query('DELETE * from noticias where noticias_id = ?',  (error) => {
            if (error) {
                res.status(400).json(error);
            } else {
                res.status(201).json({
                    noticias: "noticia deletada"
                });
            }
        });      
    }

}

module.exports = new Mural;