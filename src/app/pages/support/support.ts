import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

// ============ INTERFACES (Types) ============
interface SupportChannel {
  icon: string;
  title: string;
  desc: string;
  value: string;
  subvalue: string;
  link: string;
  color: string;
}

interface SupportCategory {
  icon: string;
  title: string;
  desc: string;
  count: string;
  link: string;
  color: string;
}

interface SupportHour {
  day: string;
  hours: string;
  status: 'open' | 'closed';
}

interface Ticket {
  name: string;
  email: string;
  phone: string;
  priority: string;
  category: string;
  subject: string;
  message: string;
  urgent: boolean;
}

// ============ COMPONENT ============
@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './support.html',
  styleUrl: './support.css'
})
export class SupportComponent {

  // ============ DATA (typed) ============
  supportChannels: SupportChannel[] = [
    {
      icon: 'fas fa-phone-volume',
      title: 'Call Center',
      desc: 'Talk to our team directly',
      value: '+255 22 213 4567',
      subvalue: '+255 22 213 4568',
      link: 'tel:+255222134567',
      color: '#3b82f6'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'WhatsApp',
      desc: 'Quick chat support',
      value: '+255 744 123 456',
      subvalue: 'Available 24/7',
      link: 'https://wa.me/255744123456',
      color: '#25D366'
    },
    {
      icon: 'fas fa-envelope',
      title: 'Email Support',
      desc: 'Send us an email',
      value: 'support@kipepeolabs.com',
      subvalue: 'Response within 24hrs',
      link: 'mailto:support@kipepeolabs.com',
      color: '#ea4335'
    },
    {
      icon: 'fas fa-headset',
      title: 'Live Chat',
      desc: 'Chat with an agent now',
      value: 'Start Chat',
      subvalue: 'Mon-Fri, 8AM-6PM',
      link: '#chat',
      color: '#FACC15'
    }
  ];

  supportCategories: SupportCategory[] = [
    {
      icon: 'fas fa-question-circle',
      title: 'General FAQs',
      desc: 'Find quick answers to common questions',
      count: '50+ articles',
      link: '/faq',
      color: '#FACC15'
    },
    {
      icon: 'fas fa-tools',
      title: 'Technical Support',
      desc: 'Get help with technical issues',
      count: '24hr response',
      link: '/contact',
      color: '#3b82f6'
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'Billing & Payments',
      desc: 'Questions about invoices and payments',
      count: 'Billing team',
      link: '/contact',
      color: '#10b981'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Security & Privacy',
      desc: 'Report security concerns',
      count: 'Priority support',
      link: '/contact',
      color: '#ef4444'
    },
    {
      icon: 'fas fa-bug',
      title: 'Report a Bug',
      desc: 'Found an issue? Let us know',
      count: 'Bug tracking',
      link: '/contact',
      color: '#8b5cf6'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Feature Request',
      desc: 'Suggest new features',
      count: 'Product team',
      link: '/contact',
      color: '#f59e0b'
    }
  ];

  supportHours: SupportHour[] = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM', status: 'open' },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM', status: 'open' },
    { day: 'Sunday', hours: 'Closed', status: 'closed' },
    { day: 'Public Holidays', hours: 'Closed', status: 'closed' }
  ];

  // ============ FORM STATE ============
  ticket: Ticket = {
    name: '',
    email: '',
    phone: '',
    priority: '',
    category: '',
    subject: '',
    message: '',
    urgent: false
  };

  isSubmitting = false;
  showSuccess = false;
  errors: { [key: string]: string } = {};

  // ============ SUBMIT ============
  onSubmit(form: any) {
    this.errors = {};

    // Validation
    if (!this.ticket.name || this.ticket.name.trim().length < 3) {
      this.errors['name'] = 'Jina lako linahitajika (angalau herufi 3)';
    }
    if (!this.ticket.email || !this.isValidEmail(this.ticket.email)) {
      this.errors['email'] = 'Email sahihi inahitajika';
    }
    if (!this.ticket.priority) {
      this.errors['priority'] = 'Chagua kipaumbele';
    }
    if (!this.ticket.category) {
      this.errors['category'] = 'Chagua kategoria';
    }
    if (!this.ticket.subject || this.ticket.subject.trim().length < 5) {
      this.errors['subject'] = 'Subject inahitajika (angalau herufi 5)';
    }
    if (!this.ticket.message || this.ticket.message.trim().length < 20) {
      this.errors['message'] = 'Message inahitajika (angalau herufi 20)';
    }

    if (Object.keys(this.errors).length > 0) {
      console.log('❌ Validation errors:', this.errors);
      return;
    }

    this.isSubmitting = true;
    console.log('📨 Submitting ticket...', this.ticket);

    setTimeout(() => {
      this.isSubmitting = false;
      this.showSuccess = true;

      const ticketNumber = 'KTL-' + Date.now().toString().slice(-6);
      console.log('✅ Ticket submitted successfully!');
      console.log('🎫 Ticket Number:', ticketNumber);

      this.ticket = {
        name: '',
        email: '',
        phone: '',
        priority: '',
        category: '',
        subject: '',
        message: '',
        urgent: false
      };

      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);

    }, 2000);
  }

  isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}