import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent {
  posts = [
    { title: 'The Future of AI in Africa', date: '15 Oct 2026', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop' },
    { title: 'Scaling Cloud Infrastructure', date: '02 Oct 2026', img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop' },
    { title: 'Building Africa\'s Tech Talent', date: '20 Sept 2026', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop' }
  ];
}