import { Component, OnInit } from '@angular/core';
import { Bill, BillService } from '../../services/bill.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  billImage: string | null = null;

  constructor(private billService: BillService, private router: Router) {}

  ngOnInit(): void {
    this.billImage = this.billService.getTempImage();

    if (!this.billImage) {
      this.router.navigate(['/']);
    }
  }

  save(): void {
    console.log('save() method called');

    if (this.billImage) {
      console.log('Bill image is present:', this.billImage);

      const newbill: Bill = {
        image: this.billImage,
        date: new Date(),
        title: 'New Invoice',
      };

      console.log('Adding bill:', newbill);

      this.billService.addBill(newbill);
      console.log('Bill added:', newbill);

      console.log('Temporary image cleared');
      this.billService.clearTempImage();
    } else {
      console.log('No bill image to save');
    }

    console.log('Navigating to home route');
    this.router.navigate(['/']);
  }

  cancel(): void {
    this.billService.clearTempImage();
    this.router.navigate(['/']);
  }
}
