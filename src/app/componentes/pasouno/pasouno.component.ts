import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constantes } from '../../../constantes/constantes';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';
import { RespuestaCalculadoraService } from 'src/app/servicios/respuestaCalculadora.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-pasouno',
  templateUrl: './pasouno.component.html',
  styleUrls: ['./pasouno.component.scss'],
  animations: [
    trigger('animationFadeOut', [
      transition(':enter', [
        style({ opacity: '1' }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: '0' }))
      ]),
      state('*', style({ opacity: '1' })),
    ])
  ]
})
export class PasounoComponent {

  primero: FormGroup;
  const = Constantes;
  /* cuota: number = 0; */

  constructor( public formBuilder: FormBuilder, public consultaCentrales: ConsultaCentralesService, public respuestaCalculadora: RespuestaCalculadoraService ) {
    this.crearFormulario();
   }

  crearFormulario() {
    this.primero = this.formBuilder.group({
      monto: ['', [Validators.required, Validators.min(20000000)]],
      periodo: ['', Validators.required],
      cuota: [0, Validators.required]
    });

    /* Subcripción de Resultados */
    this.primero.controls['monto'].valueChanges.subscribe( value => {
      this.consultaCentrales.contactoCentrales.OtrosDatos.ValorFinanciar = value;
      if (this.primero.get('periodo').value) {
        this.primero.controls['cuota'].setValue(this.respuestaCalculadora.calcularCuota(this.primero.get('periodo').value, this.primero.get('monto').value));
      }
    });
    this.primero.controls['periodo'].valueChanges.subscribe( () => {
        this.primero.controls['cuota'].setValue(this.respuestaCalculadora.calcularCuota(this.primero.get('periodo').value, this.primero.get('monto').value));
    });
  }

  get montoNoValido() {
    return this.primero.get('monto').invalid && this.primero.get('monto').touched;
  }

}
