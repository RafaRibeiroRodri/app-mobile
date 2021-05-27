import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Camera} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage {

  private endPoint;
  foto;
  dados: {
    morador_id;
    nome;
    cpf;
    rg;
    data_nasc;
    unidade;
    bloco;
    telefone;
  };

  constructor(private http: HttpClient,
              // import do plugin da câmera
              private camera: Camera) {
    this.http = http;
    this.endPoint = `${environment.backendUrl}`;
    this.get();
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  get() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user', user);
    this.http.get(this.endPoint + `/morador/dados/${user.morador_id}`).subscribe((data: any) => {
      const usuario = data.morador[0];
      this.dados = {
        morador_id: usuario.morador_id,
        nome: usuario.nome,
        cpf: usuario.cpf,
        rg: usuario.rg,
        data_nasc: usuario.data_nasc,
        unidade: usuario.unidade,
        bloco: usuario.bloco,
        telefone: usuario.telefone
      };
      this.foto = JSON.parse(localStorage.getItem('foto')).foto; // quando vc implementar o campo foto no tabela de usuários, é só atribuir o valor pra essa variável que já vai trocar no html
    });
  }

  async openCamera() {
    try {
      // aqui eu chamo a promise que abre a câmera do celular e pego a resposta na variável imageData pra depois salvar na currentImage
      const imageData = await this.camera.getPicture({
        quality: 100,
        // aqui eu defino o tipo do dado, no caso, quero a base64 da imagem
        destinationType: this.camera.DestinationType.DATA_URL,
        // formato da imagem
        encodingType: this.camera.EncodingType.JPEG,
        // aqui é o tipo da midia, no caso, eu quero só imagem
        mediaType: this.camera.MediaType.PICTURE,
        // aqui é a orientação da imagem, se n colocar true, ela vem em modo paisagem
        correctOrientation: true
        }
      );
      this.foto = 'data:image/jpeg;base64,' + imageData;
      localStorage.setItem('foto', JSON.stringify({foto: this.foto}));
    } catch (e) {
      console.log('error handler: ', e);
    }
  }

}
