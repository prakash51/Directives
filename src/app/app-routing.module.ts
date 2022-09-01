import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { BuiltInDirectivesComponent } from './Components/built-in-directives/built-in-directives.component';
import { NgSwitchComponent } from './Components/built-in-directives/ng-switch/ng-switch.component';
import { CustomDirectivesComponent } from './Components/custom-directives/custom-directives.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'built-in-directives',component:BuiltInDirectivesComponent,
  children:[
    {
      path:'ng-switch',
      component:NgSwitchComponent
    }
  ]},
  
  {path:'custom-directives',component:CustomDirectivesComponent},
  { path: '',   redirectTo: '/built-in-directives', pathMatch: 'full',},
  { path: 'directive', loadChildren: () => import('./directive/directive.module').then(m => m.DirectiveModule) },
  {path:'**', component:PagenotfoundComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

