import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  products = [
    { name: 'KipCloud', desc: 'Cloud Infrastructure', icon: 'fas fa-cloud', url: 'https://kipcloud.kipepeolabs.com' },
    { name: 'KipAI', desc: 'AI & ML Toolkit', icon: 'fas fa-brain', url: 'https://kipai.kipepeolabs.com' },
    { name: 'KipFlow', desc: 'Workflow Automation', icon: 'fas fa-diagram-project', url: 'https://kipflow.kipepeolabs.com' },
    { name: 'KipData', desc: 'Data Analytics', icon: 'fas fa-chart-simple', url: 'https://kipdata.kipepeolabs.com' },
    { name: 'KipShield', desc: 'Cybersecurity', icon: 'fas fa-shield-halved', url: 'https://kipshield.kipepeolabs.com' },
    { name: 'KipDev', desc: 'DevOps & CI/CD', icon: 'fas fa-code', url: 'https://kipdev.kipepeolabs.com' },
    { name: 'KipMobile', desc: 'Mobile Framework', icon: 'fas fa-mobile-screen', url: 'https://kipmobile.kipepeolabs.com' },
    { name: 'KipBlock', desc: 'Blockchain Solutions', icon: 'fas fa-cubes', url: 'https://kipblock.kipepeolabs.com' }
  ];
}