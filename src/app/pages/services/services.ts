import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services = [
    { name: 'Custom Software', icon: 'fas fa-code', desc: 'Tailor-made applications for your business needs' },
    { name: 'AI & Machine Learning', icon: 'fas fa-brain', desc: 'Intelligent solutions powered by AI' },
    { name: 'Cloud & DevOps', icon: 'fas fa-cloud', desc: 'Scalable cloud infrastructure and CI/CD' },
    { name: 'Mobile Apps', icon: 'fas fa-mobile-screen', desc: 'iOS and Android applications' },
    { name: 'Data Engineering', icon: 'fas fa-chart-simple', desc: 'Data pipelines and analytics' },
    { name: 'Cybersecurity', icon: 'fas fa-shield-halved', desc: 'Security audits and protection' }
  ];
}