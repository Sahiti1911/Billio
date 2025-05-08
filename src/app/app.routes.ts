import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { QrScannerComponent } from './components/qr-scanner/qr-scanner.component';
import { PreviewComponent } from './components/preview/preview.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan', component: QrScannerComponent },
  { path: 'preview', component: PreviewComponent },
];
