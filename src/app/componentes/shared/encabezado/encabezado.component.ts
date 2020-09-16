import { Component, OnInit } from '@angular/core';
import { Constantes } from 'src/constantes/constantes';
import { MultidominioService } from 'src/app/servicios/multidominio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  const = Constantes;

  constructor(public multiDominio: MultidominioService) { }

  ngOnInit() {
  }

}
