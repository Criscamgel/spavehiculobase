import { Component, OnInit } from '@angular/core';
import { MultidominioService } from './servicios/multidominio.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public multiDominio: MultidominioService,
              protected title: Title
              ) { }

  public ngOnInit(): void {
    this.multiDominio.scanDomain();
    this.title.setTitle(this.multiDominio.Domain.title);
  }
}