import { Component, OnInit } from '@angular/core';
import {PincodeService} from '../pincode/pincode.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  constructor(private pincodeService: PincodeService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.pincodeService.currentCard === undefined) {this.router.navigateByUrl(''); }
  }

}
