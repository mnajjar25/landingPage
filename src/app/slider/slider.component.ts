import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  slides = [
    {
      imageUrl: 'assets/it-slide1.jpg',
      title: 'Innovative IT Solutions',
      description: 'Empowering businesses with cutting-edge technology and customized IT strategies.',
    },
    {
      imageUrl: 'assets/it-slide2.jpg',
      title: 'Seamless Cloud Integration',
      description: 'Streamline your operations with secure and scalable cloud solutions.',
    },
    {
      imageUrl: 'assets/it-slide3.jpg',
      title: 'Future-Ready Software',
      description: 'Developing innovative software solutions tailored to your business needs.',
    }
  ];

  currentSlideIndex = 0;

  prevSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.currentSlideIndex =
      (this.currentSlideIndex + 1) % this.slides.length;
  }

}
