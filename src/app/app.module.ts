import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltInDirectivesComponent } from './Components/built-in-directives/built-in-directives.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { ActiveDirective } from './Directives/active.directive';
import { UnlessDirective } from './Directives/unless.directive';
import { CustButtonDirective } from './Directives/cust-button.directive';
import { CustomDirectivesComponent } from './Components/custom-directives/custom-directives.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { NgSwitchComponent } from './Components/built-in-directives/ng-switch/ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInDirectivesComponent,
    HighlightDirective,
    ActiveDirective,
    UnlessDirective,
    CustButtonDirective,
    CustomDirectivesComponent,
    PagenotfoundComponent,
    NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
