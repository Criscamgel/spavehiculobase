import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { Constantes } from 'src/constantes/constantes';
import { RespuestaCalculadoraService } from 'src/app/servicios/respuestaCalculadora.service';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.scss']
})
export class SpeedometerComponent  {

    canvasWidth = 300;
    canvasHeight = 100;
    needleValue = 15;
    centralLabel = '';
    const = Constantes;
    options = {
    hasNeedle: true,
    needleColor: '#bd1414',
    needleUpdateSpeed: 500,
    arcColors: ['transparent']
};

    periodo = new FormControl(48);

  constructor(public calculadoraServicio: RespuestaCalculadoraService, public breakpointObserver: BreakpointObserver,
              public consultaCentrales: ConsultaCentralesService
    ) {

    breakpointObserver.observe([
      '(max-width: 576px)'
        ]).subscribe(result => {
          if (result.matches) {
            this.canvasWidth = 200;
            this.canvasHeight = 200;
          }
        });

        this.calculadoraServicio.periodo = this.periodo.value;

        this.periodo.valueChanges.subscribe(value => {
          this.calculadoraServicio.periodo = value;
          this.cambioVelocimetro(value);
          this.calculadoraServicio.calcularCuota(value, Number(this.consultaCentrales.contactoCentrales.OtrosDatos.ValorFinanciar))
        }
          
          );

    }

  cambioVelocimetro(value) {
    switch (value) {

        case 48:
        this.needleValue = 13;

        break;

        case 60:
        this.needleValue = 37;
        break;

        case 72:
        this.needleValue = 65;
        break;

        case 84:
        this.needleValue = 87;
        break;
    
      default:
        break;
    }
    
  }

}
