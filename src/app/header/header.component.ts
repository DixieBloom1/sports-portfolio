import { Component } from '@angular/core';
import {MatToolbar} from '@angular/material/toolbar';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [
    MatToolbar,
    NgOptimizedImage,
    RouterLink
  ],
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
