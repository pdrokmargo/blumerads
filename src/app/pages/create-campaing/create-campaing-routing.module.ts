import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateCampaingComponent } from './create-campaing.component';
import { EscogeObjetivoComponent } from './components/escoge-objetivo/escoge-objetivo.component';

const routes: Routes = [
  {
    path: '',
    component: CreateCampaingComponent,
    children: [
      { path: 'escoge-objetivo', component: EscogeObjetivoComponent },
      { path: '', redirectTo: 'escoge-objetivo', pathMatch: 'full' },
      { path: '**', redirectTo: 'escoge-objetivo', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCampaingRoutingModule { }
