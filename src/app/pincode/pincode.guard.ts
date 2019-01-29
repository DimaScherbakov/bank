import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PincodeService} from './pincode.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PincodeGuard implements CanActivate {
  constructor(private pincodeService: PincodeService,
              private router: Router) {

  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.pincodeService.findCurrentCard();
    if (!this.pincodeService.currentCard) {
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
