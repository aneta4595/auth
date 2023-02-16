import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorPageComponent } from './error-page.component';

@NgModule({
  imports: [RouterModule],
  declarations: [ErrorPageComponent],
  providers: [],
  exports: [ErrorPageComponent]
})
export class ErrorPageComponentModule {
}
