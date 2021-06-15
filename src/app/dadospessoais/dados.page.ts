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
      this.foto = JSON.parse(localStorage.getItem('foto')).foto;
    });
  }

  async openCamera() {
    try {
      const imageData = await this.camera.getPicture({
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
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
