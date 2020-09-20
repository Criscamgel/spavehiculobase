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

  public scanDomain() {
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
