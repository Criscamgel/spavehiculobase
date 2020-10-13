import { Injectable } from '@angular/core';
import { Domains, Domain } from 'src/app/modelos/multi-domain';
import { ActivatedRoute } from '@angular/router';
import { Constantes } from 'src/constantes/constantes';
import { ConsultaCentralesService } from './consultaCentrales.service';

@Injectable({
  providedIn: 'root'
})
export class MultidominioService {

  const: any = Constantes;
  path: any;
  logoPath: any;
  logoMarca: any;
  private domain: Domain = new Domain();
  private domains: Domains[] = [{name: 'feria', title: 'Santander - Feria de Vehiculo'}];
  parametro: any;
  urlVehiculo = document.referrer;
  /* urlVehiculo = 'https://articulo.tucarro.com.co/MCO-558397266-brilliance-2020-v3-_JM#promoted-items-new=0'; */

  flagFeria = false;
  flagReserva = false;
  flagMarca = false;

  constructor(private route: ActivatedRoute, private consultaCentrales: ConsultaCentralesService) { }

  public set Domain(domain: Domain) {
    this.domain = domain;
  }

  public get Domain(): Domain {
    return this.domain;
  }

  putCodeMarca(parametro) {

    switch (parametro) {
      case 'bmw':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 1;
      this.consultaCentrales.contactoCentrales.OtrosDatos.IdentificacionVendedor = 161;
      break;

      case 'hyunday':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 7;
      break;

      case 'citroen':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 30;
      break;

      case 'jeep':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 9;
      break;

      case 'peugeot':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 15;
      break;

      case 'volvo':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 17;
      break;

      case 'ram':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 16;
      break;

      case 'dodge':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 4;
      break;

      case 'fiat':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 5;
      break;

      case 'jaguar':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 8;
      break;

      case 'landrover':
      this.consultaCentrales.contactoCentrales.DatosVehiculo.Marca = 11;
      break;
    
      default:
        break;
    }

  }

  public scanDomain() {
    const regexId = this.const.REGEX_ID;
    if (this.urlVehiculo.match(regexId)) {
    const id = this.urlVehiculo.match(regexId);
    const idVehiculo = `MCO${id[1]}`;
    this.redirectBase(idVehiculo);
    }

    const patch = window.location.pathname.split('/').pop();
    if (patch === 'feria') {
      sessionStorage.removeItem('domain');
    } else if (!this.loadDomain()) {
      this.domains.forEach(dom => {
        if (patch === dom.name) {
          this.domain.multiDomain = true;
          this.domain.domain = dom.name;
          this.domain.title = dom.title;
          sessionStorage.setItem('domain', JSON.stringify(this.domain));
          return;
        }
      });
    }
    this.route.queryParams.subscribe((data: any) => {
      if (data.feria) {
        this.parametro = 'feria';
        this.flagFeria = true;
        this.consultaCentrales.contactoCentrales.DatosBasicos.Apellido2 = this.parametro;
        this.urlAssetMarca(this.parametro, 'logos');
        this.logoPath = this.path;
      }

      if (data.marca) {
       this.parametro = data.marca;
       this.flagMarca = true;
       this.consultaCentrales.contactoCentrales.DatosBasicos.Apellido2 = this.parametro;
       this.putCodeMarca(this.parametro);
       this.urlAssetMarca(this.parametro, 'logos');
       this.logoPath = this.path;
      }

      if (data.reserva) {
        this.parametro = 'reserva';
        this.flagReserva = true;
        this.consultaCentrales.contactoCentrales.DatosBasicos.Apellido2 = this.parametro;
        this.urlAssetMarca(this.parametro, 'logos');
        this.logoPath = this.path;
       }

    });
  }
  redirectBase(idVehiculo) {
    document.location.href = `https://tucarro.santanderconsumer.co/landing/?idvehiculo=${idVehiculo}`;
    /* document.location.href = `http://localhost:4201/?idvehiculo=${idVehiculo}`; */
  }

  urlAssetMarca(valor, key) {
    this.const[key].filter(
    (data) => {
      if (data.nombre == valor) {
        this.path = data.path;
      }
     }
    );
  }

  loadDomain() {
    const domain: Domain = JSON.parse(sessionStorage.getItem('domain')) || undefined;
    if (domain !== undefined ) {
      this.domain.multiDomain = domain.multiDomain;
      this.domain.domain = domain.domain;
      this.Domain.title = domain.title;
      return true;
    } else {
      return false;
    }
  }
}
