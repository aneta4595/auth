import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MultiRouteComponent } from './components/multi-route/multi-route.component';
import { LoggedInComponent } from './components/logged-in/logged-in.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { PersistentLocalStorageComponent } from './components/persistent-local-storage/persistent-local-storage.component';
import { LoggedInLocalStorageComponent } from './components/logged-in-local-storage/logged-in-local-storage.component';
import { MultiRouteComponentModule } from './components/multi-route/multi-route.component-module';
import { LoggedInComponentModule } from './components/logged-in/logged-in.component-module';
import { ErrorPageComponentModule } from './components/error-page/error-page.component-module';
import { PersistentLocalStorageComponentModule } from './components/persistent-local-storage/persistent-local-storage.component-module';
import { LoggedInLocalStorageComponentModule } from './components/logged-in-local-storage/logged-in-local-storage.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: MultiRouteComponent },
      { path: 'logged-in', component: LoggedInComponent },
      { path: 'error', component: ErrorPageComponent },
      { path: 'login-local-storage', component: PersistentLocalStorageComponent },
      { path: 'logged-in-local-storage', component: LoggedInLocalStorageComponent }
    ]),
    MultiRouteComponentModule,
    LoggedInComponentModule,
    ErrorPageComponentModule,
    PersistentLocalStorageComponentModule,
    LoggedInLocalStorageComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
