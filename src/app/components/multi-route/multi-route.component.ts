import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-multi-route',
  styleUrls: ['./multi-route.component.scss'],
  templateUrl: './multi-route.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiRouteComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _router: Router, private _loginService: LoginService) { }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._loginService.login({ 
      data: {
        email: loginForm.value.email,
        password: loginForm.value.password
      } 
    
    }).subscribe({
      next: () => this._router.navigate(['/logged-in']),
      error: (err) => this._router.navigate(['/logged-in'])
    });
  }
}
