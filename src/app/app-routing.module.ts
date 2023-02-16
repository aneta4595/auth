import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultiRouteComponent } from './components/multi-route/multi-route.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { MultiRouteComponentModule } from './components/multi-route/multi-route.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { ErrorPageComponentModule } from './components/error-page/error-page.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: MultiRouteComponent },
      { path: 'logged-in', component: LoggedInComponent },
      { path: 'error', component: ErrorPageComponent }
    ]),
    MultiRouteComponentModule,
    LoggedInComponentModule,
    ErrorPageComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
