import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})
export class TeamComponent {
  teamMembers = [
    {
      name: 'JACKSON PETRO HARUNI',
      role: 'CEO  AND FOUNDER',
      bio: 'Visionary leader with Exeperience years in African tech ecosystem.',
      photo: 'assets/jack.jpeg'
    },
    {
      name: 'ELISHA ELIUS MLYASENDE',
      role: 'CTO',
      bio: 'Cloud architect and AI specialist with global experience.',
      photo: '/'
    },
    {
      name: 'MGASI MGASI',
      role: 'Head of Design',
      bio: 'Award-winning designer focused on user-centric experiences.',
      photo: 'https://images.unsplash.com/photo-1HIDWDFJD573496359142-b8d87734a5a2?w=200&h=200&fit=crop'
    },
  ];
}