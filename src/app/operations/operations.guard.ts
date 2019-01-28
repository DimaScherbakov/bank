import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PincodeService} from '../pincode/pincode.service';

@Injectable({
  providedIn: 'root'
})
export class OperationsGuard implements CanActivate {
  constructor(private pincodeService: PincodeService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.pincodeService.currentCard) return true;
  }
}
