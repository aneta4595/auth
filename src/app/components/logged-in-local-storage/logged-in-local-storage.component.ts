import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MeModel } from '../../models/me.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logged-in-local-storage',
  styleUrls: ['./logged-in-local-storage.component.scss'],
  templateUrl: './logged-in-local-storage.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoggedInLocalStorageComponent {
  readonly meData$: Observable<MeModel> = this._userService.getMe();

  readonly meDataList$: Observable<{ key: string; value: string }[]> =
    this.meData$.pipe(
      map((data) =>
        Object.entries(data).map((e) => ({
          key: e[0],
          value: e[1],
        }))
      )
    );
  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private _router: Router
  ) {}

  logOut(): void {
    this._authService.logOut();
    this._router.navigate(['/login-local-storage']);
  }
}
