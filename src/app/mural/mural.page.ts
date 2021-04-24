import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Mural} from '../../api/model/mural';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.page.html',
  styleUrls: ['./mural.page.scss'],
})
export class MuralPage {
  
  private endPoint;
  mural;

  constructor(private http: HttpClient) {
    this.http = http;
    this.endPoint = `${environment.backendUrl}`;
    this.get();
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get() {
    this.http.get(this.endPoint + '/noticias').subscribe((data: any) => { this.mural = data.noticias})
  }

}
