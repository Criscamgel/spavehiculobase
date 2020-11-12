import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaCentralesService } from './consultaCentrales.service';

@Injectable({
  providedIn: 'root'
})
export class ScanparamsService {

  enriquecido = false;
  roisense;
  roisenseBool = false;

  constructor(private route: ActivatedRoute
              ) { }

  getParam() {
    this.route.queryParams.subscribe((data: any) => {
      if (data.roisense && data.roisense.length === 6) {
        this.roisense = data.roisense;
        this.roisenseBool = true;
      }
    });

    this.route.queryParams.subscribe((data: any) => {
      if (data.fuente === 'enriquecido') {
        this.enriquecido = true;
      }
    });
  }
}
