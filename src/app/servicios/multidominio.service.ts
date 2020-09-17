import { Injectable } from '@angular/core';
import { Domains, Domain } from 'src/app/modelos/multi-domain';
import { ActivatedRoute } from '@angular/router';
import { Constantes } from 'src/constantes/constantes';

@Injectable({
  providedIn: 'root'
})
export class MultidominioService {

  const: any = Constantes;
  path: any;
  logoPath: any;
  logoMarca: any;
  private domain: Domain = new Domain();
  private domains: Domains[] = [{name: 'feria', title: 'Santander - Feria de Vehiculo'},
                                {name: 'marca', title: 'Santander - Feria de Vehiculo'},
                                {name: 'reserva', title: 'Santander - Feria de Vehiculo'}];
  parametro: any;

  constructor(private route: ActivatedRoute) { }

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
        this.urlAssetMarca(this.parametro, 'logos');
        this.logoPath = this.path;
      }

      if (data.marca) {
       this.parametro = data.marca;
       this.urlAssetMarca(this.parametro, 'logos');
       this.logoPath = this.path;
      }

      if (data.reserva) {
        this.parametro = 'reserva';
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