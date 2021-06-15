class Quantidade {

    quantidadePorIdade(resultado) {
        let jovens = 0;
        let adultos = 0;
        let idosos = 0;
        for (let i in resultado) {   
            const nasc_date = resultado[i].data_nasc;
            const now = new Date();
            const anos = (now.getFullYear() - nasc_date.getFullYear());
            if (anos < 16) { jovens++ }
            else if (anos > 16 && anos < 64) { adultos++ }
            else { idosos++ }
        }
        return {
            jovens: jovens,
            adultos: adultos,
            idosos: idosos
        }
    }

    quantidadePorGenero(resultado) {
        let masc = 0;
        let fem = 0;
        let nIdent = 0;
        for (let g in resultado) {
            const genero = resultado[g].genero;
            if (genero === 'm') { masc++ }
            else if (genero === 'f') { fem++ }
            else { nIdent++ }
        }
        return {
            masc: masc,
            fem: fem,
            nIdent: nIdent
        }
    }  
}

module.exports = new Quantidade;