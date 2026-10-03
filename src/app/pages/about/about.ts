import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

interface StatItem {
  icon: string;
  number: string;
  label: string;
  color: string;
}

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  href: string;
  bgColor: string;
  iconColor: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {

  // ============================================
  // HERO
  // ============================================
  heroTitle = 'About Kipepeo Tech Labs';
  heroSubtitle = 'Tunabadilisha Data Kuwa Maamuzi, na Teknolojia Kuwa Maendeleo — kwa kampuni na taasisi Tanzania na Afrika.';

  // ============================================
  // WHO WE ARE
  // ============================================
  tagline = 'Sisi ni Nani';
  aboutTitle = 'Tunabadilisha Afrika kwa Teknolojia';

  aboutParagraphs = [
    'Kipepeo Tech Labs ni kampuni ya teknolojia iliyoanzishwa Tanzania kwa lengo la kubadilisha jinsi kampuni na taasisi zinavyofanya kazi kwa kutumia Data Analysis, AI, na System Development.',
    'Tunaamini kwamba kila kampuni na taasisi inastahili mifumo ya kisasa inayorahisisha maamuzi, inaongeza ufanisi, na inalinda rasilimali. Kwa miaka 5-8 ijayo, tunalenga kuwa daraja la kwanza la mabadiliko ya kidijitali Tanzania na nje yake.'
  ];

  aboutList: string[] = [
    'Kutatua upotevu wa data na makosa ya hesabu',
    'Kupunguza uchafuzi wa mazingira kwa teknolojia safi',
    'Kufanya kumbukumbu kwa automation na trigger systems',
    'Kutoa AI ya uchambuzi na utabiri (prediction)'
  ];

  // ============================================
  // STATS (MPYA)
  // ============================================
  stats: StatItem[] = [
    { icon: 'fas fa-calendar-alt', number: '2026', label: 'Mwaka wa Kuanzishwa', color: '#FACC15' },
    { icon: 'fas fa-cubes', number: '3', label: 'Suluhisho Kuu', color: '#3b82f6' },
    { icon: 'fas fa-map-marked-alt', number: '8+', label: 'Nchi Lengwa 2032', color: '#10b981' },
    { icon: 'fas fa-users', number: '1,000+', label: 'Wateja Lengwa', color: '#8b5cf6' }
  ];

  // ============================================
  // VISION & MISSION
  // ============================================
  vision = {
    title: 'Maono (Vision)',
    text: 'Kuwa kampuni inayoongoza kwa AI, Data Analysis, na System Development Afrika Mashariki na Kati ifikapo 2032 — tukihudumia kampuni na taasisi zaidi ya 1,000 Tanzania na nje ya Tanzania.',
    quote: 'To be Africa\'s leading technology company, driving digital transformation across the continent.'
  };

  mission = {
    title: 'Dhamira (Mission)',
    text: 'Kutoa suluhisho za kiteknolojia zenye ubora wa hali ya juu — applications, automation systems, na AI — zinazowezesha kampuni na taasisi kufanya maamuzi sahihi, kupunguza gharama, na kulinda mazingira.',
    quote: 'To empower businesses and institutions with innovative technology solutions that drive growth and efficiency.'
  };

  // ============================================
  // CORE VALUES (7 halisi za Kipepeo)
  // ============================================
  coreValues: CoreValue[] = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Uaminifu',
      description: 'Tunafanya kile tunachosema. Tunatoa data halisi, si za uongo.',
      iconBg: 'rgba(250, 204, 21, 0.15)',
      iconColor: '#FACC15'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Uwajibikaji',
      description: 'Tunajibika kwa wateja, timu, na jamii kwa matokeo yetu.',
      iconBg: 'rgba(59, 130, 246, 0.15)',
      iconColor: '#3b82f6'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Professionalism',
      description: 'Tunafuata viwango vya juu vya kitaalamu katika kila kazi.',
      iconBg: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#10b981'
    },
    {
      icon: 'fas fa-search',
      title: 'Uwazi',
      description: 'Tunawapa wateja uelewa kamili wa mifumo na gharama.',
      iconBg: 'rgba(139, 92, 246, 0.15)',
      iconColor: '#8b5cf6'
    },
    {
      icon: 'fas fa-lock',
      title: 'Usiri',
      description: 'Data za wateja zinalindwa kwa usiri mkubwa.',
      iconBg: 'rgba(239, 68, 68, 0.15)',
      iconColor: '#ef4444'
    },
    {
      icon: 'fas fa-user-shield',
      title: 'Usalama',
      description: 'Tunazingatia usalama wa data kwa viwango vya kimataifa.',
      iconBg: 'rgba(6, 182, 212, 0.15)',
      iconColor: '#06b6d4'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Mazingira',
      description: 'Tunasaidia kupunguza uchafuzi wa mazingira kwa teknolojia safi.',
      iconBg: 'rgba(34, 197, 94, 0.15)',
      iconColor: '#22c55e'
    }
  ];

  // ============================================
  // SERVICES (MPYA – kwa About Page)
  // ============================================
  services: ServiceItem[] = [
    {
      icon: 'fas fa-mobile-alt',
      title: 'Applications',
      description: 'Programu za simu na kompyuta kwa usimamizi wa kampuni, kuchambua data, na kufuatilia mazingira.',
      href: '/services/applications',
      bgColor: 'rgba(59, 130, 246, 0.15)',
      iconColor: '#3b82f6'
    },
    {
      icon: 'fas fa-cogs',
      title: 'Automation Systems',
      description: 'Mifumo inayofanya kazi kiotomatiki, trigger systems, na workflow automation bila mkono wa mtu.',
      href: '/services/automation',
      bgColor: 'rgba(250, 204, 21, 0.15)',
      iconColor: '#FACC15'
    },
    {
      icon: 'fas fa-brain',
      title: 'AI Solutions',
      description: 'AI ya kuchambua data, kutabiri (prediction), kugundua makosa, na chatbots kwa huduma za wateja.',
      href: '/services/ai',
      bgColor: 'rgba(16, 185, 129, 0.15)',
      iconColor: '#10b981'
    }
  ];

  // ============================================
  // TIMELINE (2026–2032)
  // ============================================
  timeline: TimelineItem[] = [
    {
      year: '2026',
      title: 'Kuanzishwa',
      description: 'Kipepeo Tech Labs ilianzishwa na timu ya wabunifu wenye maono ya kubadilisha Afrika.'
    },
    {
      year: '2027',
      title: 'Wateja 50 Tanzania',
      description: 'Tulianza kutoa automation systems na kupata wateja 50 wa kwanza Tanzania.'
    },
    {
      year: '2028',
      title: 'AI Solutions + Kenya & Uganda',
      description: 'Tulianza kutoa AI solutions na kuingia Kenya na Uganda. Wateja 200.'
    },
    {
      year: '2029',
      title: 'Ofisi Nje ya Tanzania',
      description: 'Tulifikia wateja 500 na kuanzisha ofisi za kwanza nje ya Tanzania.'
    },
    {
      year: '2030',
      title: 'Suluhisho za Kimataifa',
      description: 'Tulifikia wateja 800 na kutoa suluhisho za kimataifa.'
    },
    {
      year: '2031',
      title: 'Kiongozi Afrika Mashariki',
      description: 'Tulifikia wateja 1,000+ na kuwa kampuni inayoongoza Afrika Mashariki.'
    },
    {
      year: '2032',
      title: 'R&D ya AI ya Hali ya Juu',
      description: 'Tulianza R&D ya AI ya hali ya juu na kupanua Afrika Kati na Kusini.'
    }
  ];

  // ============================================
  // WHY CHOOSE US (6 items)
  // ============================================
  whyChooseUs: WhyChooseItem[] = [
    {
      icon: 'fas fa-users-cog',
      title: 'Timu ya Wataalam',
      description: 'Wahandisi, wabunifu, na wataalam wa AI wenye uzoefu wa miaka 5+.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Delivery ya Haraka',
      description: 'Tunakamilisha miradi kwa wakati na kwa viwango vya kimataifa.'
    },
    {
      icon: 'fas fa-headset',
      title: 'Support ya 24/7',
      description: 'Tunatoa msaada wa kiufundi wakati wote — siku 7 kwa wiki.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Usalama wa Taarifa',
      description: 'Tunalenga ISO 27001 na kufuata viwango vya kimataifa vya usalama.'
    },
    {
      icon: 'fas fa-globe-africa',
      title: 'Local Understanding',
      description: 'Tunajua mazingira ya Tanzania na Afrika vizuri kuliko wageni.'
    },
    {
      icon: 'fas fa-bullseye',
      title: 'Custom Solutions',
      description: 'Tunatengeneza suluhisho kulingana na mahitaji yako halisi.'
    }
  ];

  // ============================================
  // CTA
  // ============================================
  ctaTitle = 'Uko Tayari Kufanya Kazi Nasi?';
  ctaSubtitle = 'Hebu tujenge kitu cha kushangaza pamoja — kwa teknolojia inayobadilisha Afrika.';

}