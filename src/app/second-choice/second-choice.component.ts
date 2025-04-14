import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-second-choice',
  imports: [],
  templateUrl: './second-choice.component.html',
  styleUrl: './second-choice.component.scss'
})
export class SecondChoiceComponent implements AfterViewInit{

  @ViewChild('volleyballVideo') volleyballVideo!: ElementRef;
  @ViewChild('dartsVideo') dartsVideo!: ElementRef;


  constructor(private el: ElementRef) {
  }


  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement.querySelector('.second-choice-container'));
  }

  flipCard(card: HTMLElement, videoId?: string) {
    card.classList.toggle('flipped');

    if (videoId) {
      // Load the YouTube video when flipping to back
      setTimeout(() => {
        const iframe = card.querySelector('iframe');
        if (iframe) {
          iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`);
        }
      }, 300);
    } else {
      // Pause video when flipping back to front
      const iframe = card.querySelector('iframe');
      if (iframe) {
        iframe.setAttribute('src', '');
      }
    }
  }

}
