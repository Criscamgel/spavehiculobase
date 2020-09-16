import { Injectable } from '@angular/core';
import { ContactoCentrales } from '../interfaces/contactoCentrales';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Constantes } from 'src/constantes/constantes';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCentralesService {

  contactoCentrales: ContactoCentrales = {
    DatosBasicos: {
      TipoDocumento: null,
      NumeroDocumento: null,
      Nombre: null,
      ValorVehiculo: null,
      Celular: null,
      CorreoPersonal: null
    },
    DatosFinancieros: {
      ActividadEconomica: null,
      ActividadIndependiente: 3,
      IngresoMensual: null
    },
    OtrosDatos: {
      AutorizaConsultaCentrales: false,
      AutorizaMareigua: false,
      ValorFinanciar: null,
      UsuarioRadica: 'd.avendanom',
      ConcesionarioRadicacion: 179,
      IdentificacionVendedor: 999,
      Marca: 14
    }
  };

  linkOrigen: any;
  token: any;
  env = environment;
  const = Constantes;

  /* Estados Completos Steps */
  primeroCompleto = false;
  segundoCompleto = false;

  observableAutenticar: any;
  autenticar: any;

  headers = new HttpHeaders ({
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
  });
  headerVi;
  optionsVi;
  options = { headers: this.headers };

  constructor(private http: HttpClient) {
    this.observableAutenticar = new BehaviorSubject<number>(this.autenticar);
   }

  autenticando() {

    const bodyT = {
      Username: this.const.username,
      Password: this.const.password
    };

    const body = new HttpParams({fromObject: bodyT});

    return this.http.post(`${this.env.urlA}`, body, this.options)
    .subscribe((resp: any) => {
           this.token = resp.Token;
           this.autenticar = resp.Status;

           this.headerVi = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
           };

           this.optionsVi = { headers: this.headerVi };
           this.observableAutenticar.next(this.autenticar);
      });
  }

  respuesta( contacto: any ) {
    contacto = JSON.stringify(contacto);
    return this.http.post(`${this.env.urlV}`, contacto, this.optionsVi);
  }
}
