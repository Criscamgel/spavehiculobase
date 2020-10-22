import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaCentralesService } from './consultaCentrales.service';

@Injectable({
  providedIn: 'root'
})
export class ScanparamsService {

  enriquecido = false;

  constructor(private route: ActivatedRoute,
              private consultaCentrales: ConsultaCentralesService
              ) { }

  getParam() {
    this.route.queryParams.subscribe((data: any) => {
      if (data.roisense && data.roisense.length === 6) {
        this.consultaCentrales.contactoCentrales.OtrosDatos.InfoDos = data.roisense;
      }
    });

    this.route.queryParams.subscribe((data: any) => {
      if (data.fuente === 'enriquecido') {
        this.enriquecido = true;
      }
    });
  }
}
