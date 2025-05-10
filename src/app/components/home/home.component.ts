import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bill, BillService } from '../../services/bill.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  bills: Bill[] = [];
  constructor(private billService: BillService, private router: Router) {
    this.bills = this.billService.getBills();
    console.log(this.bills);
    console.log('Bills length: ', this.bills.length);
  }

  ngOnInit() {
    this.loadBills();
    this.bills = this.bills.map((bill) => ({ ...bill, showImage: false }));
  }

  loadBills() {
    this.bills = this.billService.getBills();
  }
}
