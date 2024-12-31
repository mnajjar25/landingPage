import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      imageUrl: 'assets/portfolio1.png',
      title: 'Cloud Infrastructure Setup',
      description: 'Designed and implemented secure and scalable cloud solutions.',
    },
    {
      imageUrl: 'assets/portfolio2.jpg',
      title: 'E-commerce Platform',
      description: 'Developed a high-performance e-commerce solution for seamless shopping experiences.',
    },
    {
      imageUrl: 'assets/portfolio3.jpg',
      title: 'Cybersecurity System',
      description: 'Built advanced cybersecurity protocols to safeguard client assets.',
    },
    {
      imageUrl: 'assets/portfolio4.jpg',
      title: 'Custom CRM Development',
      description: 'Created a custom CRM tailored to client-specific needs.',
    },
  ];
}
