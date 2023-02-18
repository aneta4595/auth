import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-persistent-local-storage',
  styleUrls: ['./persistent-local-storage.component.scss'],
  templateUrl: './persistent-local-storage.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersistentLocalStorageComponent {
  readonly loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private _authService: AuthService, private _router: Router) {
  }

  onLoginFormSubmitted(loginForm: FormGroup): void {
    this._authService.login({ 
      data: {
        email: loginForm.value.email,
        password: loginForm.value.password
      }
     }).subscribe({
      next: () => this._router.navigate(['/logged-in-local-storage'])
     });
  }
}
