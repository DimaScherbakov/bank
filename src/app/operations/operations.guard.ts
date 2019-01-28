import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {PincodeService} from '../pincode/pincode.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsGuard implements CanActivate {
  constructor(private pincodeService: PincodeService,
              private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.pincodeService.currentCard) {
      this.router.navigateByUrl('');
      return false; }
      return true;
  }
}
