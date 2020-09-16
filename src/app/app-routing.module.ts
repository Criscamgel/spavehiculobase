import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { Domains, Domain } from 'src/app/modelos/multi-domain';

const routes: Routes = [
  { path: '', component:  InicialComponent,
  children: [
    {matcher: matcherFunction, component: InicialComponent},
    {path: '', redirectTo: 'feria', pathMatch: 'full'}
  ]
  },
  { path: '**', pathMatch: 'full', redirectTo:  'feria' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export function matcherFunction(url: UrlSegment[]) {
  /* const pathActual = window.location.href; */
  if (url.length === 1 /* && pathActual.includes('?') */) {
    const path = url[0].path;
    console.log('matcherFunction', url);
    if (path.includes('feria') || path.includes('marca') || path.includes('reserva')) {
        url[0].path = validateUrlDomain();
        return {consumed: url};
    }
  }
  return null;
}

export function validateUrlDomain(): string {
  const domain: Domain = JSON.parse(sessionStorage.getItem('domain')) || undefined;
  if (domain !== undefined ) {
    return domain.domain;
  } else {
    return 'feria';
  }
}
