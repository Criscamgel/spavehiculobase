import { Component } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ConsultaCentralesService } from 'src/app/servicios/consultaCentrales.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.scss'],
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
export class InicialComponent {
  const = Constantes;
  splash = true;

  constructor(public consultaCentrales: ConsultaCentralesService) {
    this.splashToggle();
  }

  splashToggle() {
    setTimeout(() => {
      this.splash = false;
      this.consultaCentrales.linkOrigen = document.referrer;
    }, 2000);
  }
}

