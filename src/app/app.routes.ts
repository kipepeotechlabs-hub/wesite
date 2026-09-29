import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { TeamComponent } from './pages/team/team';
import { ContactComponent } from './pages/contact/contact';
import { ServicesComponent } from './pages/services/services';
import { CareersComponent } from './pages/careers/careers';
import { BlogComponent } from './pages/blog/blog';
import { SupportComponent } from './pages/support/support';
import { ChatbotComponent } from './pages/chatbot/chatbot';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  // ========== HOME ==========
  { 
    path: '', 
    component: HomeComponent, 
    title: 'Kipepeo Tech Labs — Home' 
  },

  // ========== ABOUT ==========
  { 
    path: 'about', 
    component: AboutComponent, 
    title: 'About Us — KTL' 
  },

  // ========== TEAM ==========
  { 
    path: 'team', 
    component: TeamComponent, 
    title: 'Our Team — KTL' 
  },

  // ========== CONTACT ==========
  { 
    path: 'contact', 
    component: ContactComponent, 
    title: 'Contact Us — KTL' 
  },

  // ========== SERVICES ==========
  { 
    path: 'services', 
    component: ServicesComponent, 
    title: 'Services — KTL' 
  },

  // ========== CAREERS ==========
  { 
    path: 'careers', 
    component: CareersComponent, 
    title: 'Careers — KTL' 
  },

  // ========== BLOG ==========
  { 
    path: 'blog', 
    component: BlogComponent, 
    title: 'Blog — KTL' 
  },

  // ========== SUPPORT ==========
  { 
    path: 'support', 
    component: SupportComponent, 
    title: 'Support — Kipepeo Tech Labs' 
  },

  // ========== CHATBOT (MPYA) ==========
  { 
    path: 'chatbot', 
    component: ChatbotComponent, 
    title: 'AI Chat Bot — KTL' 
  },

  // ========== 404 — WILDCARD (LAZIMA IWE MWISHO) ==========
  { 
    path: '**', 
    component: NotFoundComponent, 
    title: '404 — Ukurasa Haupo' 
  }
];