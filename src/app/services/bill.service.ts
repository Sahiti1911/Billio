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
      image: 'https://billio2.blob.core.windows.net/billio/00056_Page1.png',
      date: new Date('2025-05-03'),
      title: 'Electronics Invoice',
    },
    {
      image: 'assets/Bill2.jpg',
      date: new Date('2025-04-15'),
      title: 'Grocery Invoice',
    },
    {
      image: 'assets/Bill1.jpg',
      date: new Date('2025-04-15'),
      title: 'Grocery Invoice',
    },
    {
      image: 'assets/Bill2.jpg',
      date: new Date('2025-04-15'),
      title: 'Grocery Invoice',
    },
    {
      image: 'assets/Bill1.jpg',
      date: new Date('2025-04-15'),
      title: 'Grocery Invoice',
    },
    {
      image: 'assets/Bill2.jpg',
      date: new Date('2025-04-15'),
      title: 'Grocery Invoice',
    },
    {
      image: 'assets/Bill1.jpg',
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
