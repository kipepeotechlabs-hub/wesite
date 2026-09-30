import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dira-ya-taifa',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dira-ya-taifa.html',
  styleUrl: './dira-ya-taifa.css'
})
export class DiraYaTaifaComponent {

  pdfUrl = 'assets/dira-ya-taifa-2050.pdf';
  safePdfUrl: SafeResourceUrl;
  showPdf = false;

  constructor(private sanitizer: DomSanitizer) {
    this.safePdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'assets/dira-ya-taifa-2050.pdf'
    );
  }

  openPdf(): void {
    this.showPdf = true;
    document.body.style.overflow = 'hidden';
  }

  closePdf(): void {
    this.showPdf = false;
    document.body.style.overflow = 'auto';
  }
}