import { Component, OnInit } from '@angular/core';
import { BillService } from '../../services/bill.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [CommonModule],
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

      const bill = {
        image: this.billImage,
        date: new Date(),
        title: 'Scanned Bill',
      };

      console.log('Adding bill:', bill);

      this.billService.addBill(bill);

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
