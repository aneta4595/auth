import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { LoggedInLocalStorageComponent } from './logged-in-local-storage.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    MatTabsModule,
    MatTableModule,
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatButtonModule,
  ],
  declarations: [LoggedInLocalStorageComponent],
  providers: [],
  exports: [LoggedInLocalStorageComponent],
})
export class LoggedInLocalStorageComponentModule {}
