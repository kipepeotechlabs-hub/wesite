import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './careers.html',
  styleUrl: './careers.css'
})
export class CareersComponent {
  jobs = [
    { title: 'Senior Frontend Developer', location: 'Dar es Salaam', type: 'Full-time' },
    { title: 'AI/ML Engineer', location: 'Remote', type: 'Full-time' },
    { title: 'DevOps Engineer', location: 'Dar es Salaam', type: 'Full-time' },
    { title: 'UI/UX Designer', location: 'Hybrid', type: 'Full-time' }
  ];
}