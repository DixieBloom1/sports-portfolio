import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {StudentGalleryComponent} from '../student-gallery/student-gallery.component';
import {SecondChoiceComponent} from '../second-choice/second-choice.component';

@Component({
  selector: 'app-main-page',
  imports: [
    StudentGalleryComponent,
    SecondChoiceComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements AfterViewInit{
  @ViewChild('basketballVideo') basketballVideo!: ElementRef<HTMLVideoElement>;
  @ViewChild('footballVideo') footballVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.ensureVideoPlayback(this.basketballVideo.nativeElement);
    this.ensureVideoPlayback(this.footballVideo.nativeElement);
  }

  private ensureVideoPlayback(video: HTMLVideoElement) {
    // First try standard autoplay
    const playPromise = video.play();

    // If autoplay fails, use fallback
    if (playPromise !== undefined) {
      playPromise.catch(_ => {
        // Some browsers require explicit mute
        video.muted = true;
        video.play().catch(e => console.log('Video play failed:', e));
      });
    }
  }
}
