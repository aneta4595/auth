import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-logged-in',
  styleUrls: ['./logged-in.component.scss'],
  templateUrl: './logged-in.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoggedInComponent {
  readonly user$: Observable<any> = this._loginService.dataUser$;

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  goBack(): void {
    this._router.navigate(['/login'])
  }
}
