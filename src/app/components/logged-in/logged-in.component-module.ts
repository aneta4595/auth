import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { LoggedInComponent } from './logged-in.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule, MatFormFieldModule, MatInputModule,],
  declarations: [LoggedInComponent],
  providers: [],
  exports: [LoggedInComponent]
})
export class LoggedInComponentModule {
}
