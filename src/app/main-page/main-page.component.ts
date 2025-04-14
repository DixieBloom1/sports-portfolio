import { Component } from '@angular/core';
import {StudentGalleryComponent} from '../student-gallery/student-gallery.component';

@Component({
  selector: 'app-main-page',
  imports: [
    StudentGalleryComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
