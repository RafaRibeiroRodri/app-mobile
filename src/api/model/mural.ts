export class Mural {
    noticias_id?: number;
    conteudo?: string;

  
    constructor(mural) {
      if (typeof mural === 'number') {
        this.noticias_id = mural;
      } else if (mural) {
        this.noticias_id = mural.noticias_id || '';
        this.conteudo = mural.conteudo || '';
      }
    }
}