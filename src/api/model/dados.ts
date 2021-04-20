export class Dados {
    morador_id?: number;
    email?: string;
    senha?: string;
    nome?:  string;
    cpf?: string;
    rg?: string;
    data_nasc?: string;
    unidade?: number;
    bloco?: string;
    telefone?: string;
    veic_placa?: string;
    veic_modelo?: string;
    

  
    constructor(dados) {
      if (typeof dados === 'number') {
        this.morador_id = dados;
      } else if (dados) {
        this.morador_id = dados.morador_id || '';
        this.email = dados.email || '';
        this.senha = dados.senha || '';
        this.nome = dados.nome || '';
        this.cpf = dados.cpf || '';
        this.rg = dados.rg || '';
        this.data_nasc = dados.data_nasc || '';
        this.unidade = dados.unidade || '';
        this.bloco = dados.bloco || '';
        this.telefone = dados.telefone || '';
        this.veic_placa = dados.veic_placa || '';
        this.veic_modelo = dados.veic_modelo || '';
      }
    }
}