import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-error-page',
  styleUrls: ['./error-page.component.scss'],
  templateUrl: './error-page.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorPageComponent {
}
