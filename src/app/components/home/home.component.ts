import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bill, BillService } from '../../services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  providers: [BillService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  bills: Bill[] = [];
  constructor(private billService: BillService, private router: Router) {
    this.bills = this.billService.getBills();
  }
  goToScanner() {
    this.router.navigate(['/scan']);
  }
}
