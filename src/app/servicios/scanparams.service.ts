import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ScanparamsService {

  roisense;
  enriquecido = false;
  roisenseBool = false;

  constructor(private route: ActivatedRoute
              ) { }

  getParam() {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.route.queryParams.subscribe((data: any) => {
      if (data.roisense && data.roisense.length === 6) {
        this.roisense = data.roisense;
        this.roisenseBool = true;
      }
      if (data.fuente === 'enriquecido') {
        this.enriquecido = true;
      }
    });
  }
}
