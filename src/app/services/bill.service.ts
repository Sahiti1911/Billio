import { Injectable } from '@angular/core';

export interface Bill {
  image: string;
  date: Date;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private bills: Bill[] = [
    {
      image: 'assets/Bill1.jpg',
      date: new Date('2025-05-03'),
      title: 'Electronics Invoice',
    },
    {
      image: 'assets/bill2.jpg',
      date: new Date('2025-04-15'),
      title: 'Grocery Invoice',
    },
  ];

  private tempImage: string | null = null;

  constructor() {}

  getBills(): Bill[] {
    return this.bills;
  }

  addBill(bill: Bill) {
    this.bills.push(bill);
  }

  setTempImage(imageUrl: string): void {
    this.tempImage = imageUrl;
  }

  getTempImage(): string | null {
    return this.tempImage;
  }

  clearTempImage(): void {
    this.tempImage = null;
  }
}
