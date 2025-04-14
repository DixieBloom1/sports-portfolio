import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatToolbar} from '@angular/material/toolbar';
import {NgOptimizedImage} from '@angular/common';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbar,
    NgOptimizedImage
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Track button state independently
  isOnQuestionPage = false;

  // Text and icons based on state
  get headerText() {
    return this.isOnQuestionPage
      ? 'Povratak na glavnu stranicu'
      : 'Bavimo li se i mi ovim sportom...?';
  }

  get leftIcon() {
    return this.isOnQuestionPage ? 'football.svg' : 'basketball.svg';
  }

  get rightIcon() {
    return this.isOnQuestionPage ? 'basketball.svg' : 'football.svg';
  }

  constructor(private router: Router) {}

  handleButtonClick() {
    // 1. Immediately update the visual state
    this.isOnQuestionPage = !this.isOnQuestionPage;

    // 2. Navigate after a tiny delay (for smooth UI update)
    setTimeout(() => {
      this.router.navigate([this.isOnQuestionPage ? '/question' : '/home']);
    }, 50);
  }
}
