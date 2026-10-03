import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  shortBio: string;
  fullBio: string;
  photo: string;
  skills: string[];
  email: string;
  linkedin: string;
  twitter: string;
  github: string;
  expanded?: boolean;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrls: ['./team.css']
})
export class TeamComponent {

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'JACKSON PETRO HARUNI',
      role: 'CEO & Founder',
      shortBio: 'Kiongozi mwenye maono na uzoefu katika mfumo wa teknolojia Afrika.',
      fullBio: 'Jackson Petro Haruni ni mwanzilishi na CEO wa Kipepeo Tech Labs. Ana uzoefu wa miaka 5+ katika Data Analysis, AI, na System Development. Alianzisha Kipepeo Tech Labs kwa lengo la kuleta teknolojia ya hali ya juu kwa gharama nafuu kwa kila kampuni na taasisi Afrika. Ana shahada ya Sayansi ya Kompyuta na amefanya kazi na kampuni mbalimbali Tanzania na nje yake.',
      photo: 'assets/jack.jpeg',
      skills: ['AI & Machine Learning', 'Data Analysis', 'System Architecture', 'Leadership'],
      email: 'jackson@kipepeotech.co.tz',
      linkedin: '#',
      twitter: '#',
      github: '#',
      expanded: false
    },
    {
      id: 2,
      name: 'ELISHA ELIUS MLYASENDE',
      role: 'Chief Technology Officer (CTO)',
      shortBio: 'Mtaalam wa Cloud Architecture na AI mwenye uzoefu wa kimataifa.',
      fullBio: 'Elisha El ius Mlyasende ni CTO wa Kipepeo Tech Labs. Anaongoza timu ya wahandisi na wataalam wa teknolojia. Ana uzoefu wa miaka 7+ katika System Development, Cloud Architecture, na DevOps. Amefanya kazi na kampuni za kimataifa na ana shahada ya Uhandisi wa Programu.',
      photo: 'assets/elisha.jpeg',
      skills: ['System Development', 'Cloud Architecture', 'DevOps', 'Team Leadership'],
      email: 'elisha@kipepeotech.co.tz',
      linkedin: '#',
      twitter: '#',
      github: '#',
      expanded: false
    },
    {
      id: 3,
      name: 'MGASI MGASI',
      role: 'Head of Design',
      shortBio: 'Mbunifu aliyeshinda tuzo, anayejikita kwenye uzoefu wa mtumiaji.',
      fullBio: 'Mgasi Mgasi ni Head of Design wa Kipepeo Tech Labs. Anaongoza timu ya wabunifu na anahakikisha kila bidhaa ina uzoefu bora wa mtumiaji. Ana uzoefu wa miaka 5+ katika UI/UX Design, Brand Strategy, na Product Design. Ameshinda tuzo mbalimbali za ubunifu Afrika.',
      photo: 'assets/mgasi.jpeg',
      skills: ['UI/UX Design', 'Brand Strategy', 'Product Design', 'Prototyping'],
      email: 'mgasi@kipepeotech.co.tz',
      linkedin: '#',
      twitter: '#',
      github: '#',
      expanded: false
    }
  ];

  // Toggle "Soma Zaidi"
  toggleBio(member: TeamMember): void {
    member.expanded = !member.expanded;
  }

}