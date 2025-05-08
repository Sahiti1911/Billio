import { Component } from '@angular/core';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { BillService } from '../../services/bill.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-qr-scanner',
  imports: [ZXingScannerModule, CommonModule],
  templateUrl: './qr-scanner.component.html',
  styleUrl: './qr-scanner.component.css',
})
export class QrScannerComponent {
  formatsEnabled = [BarcodeFormat.QR_CODE];

  constructor(private billService: BillService, private router: Router) {}

  onCodeResult(result: string) {
    console.log('QR Code result:', result);
    if (!result) {
      console.warn('Scan returned empty result');
      return;
    }
    this.billService.setTempImage(result);
    this.router.navigate(['/preview']);
  }
}
