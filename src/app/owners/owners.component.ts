import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-owners',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './owners.component.html',
  styleUrl: './owners.component.css'
})
export class OwnersComponent {
  founders = [
    {
      imageUrl: 'assets/owner1.jpg',
      name: 'John Doe',
      position: 'Chief Executive Officer',
      description:
        'With over 15 years of experience in IT, John has been a driving force in creating innovative solutions.',
    },
    {
      imageUrl: 'assets/owner2.jpg',
      name: 'Jane Smith',
      position: 'Chief Technology Officer',
      description:
        'An expert in technology strategy and development, Jane ensures we stay ahead in the IT world.',
    },
    {
      imageUrl: 'assets/owner3.jpg',
      name: 'Emily Johnson',
      position: 'Chief Operating Officer',
      description:
        'Emily specializes in operational excellence, delivering seamless and efficient services.',
    },
  ];
}
