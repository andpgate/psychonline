import { inject } from '@angular/core';import { AuthService } from 'src/app/demo/service/auth.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => 
  {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuth.value == false) {
        router.navigate(['/auth/login']);
        return false;
    }

    return authService.isAuth.value;
};
