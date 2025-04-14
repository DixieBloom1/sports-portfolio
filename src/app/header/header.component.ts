import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MatToolbar,
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
