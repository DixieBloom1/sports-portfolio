import {Component, Inject} from '@angular/core';
import {NgIf} from '@angular/common';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-user-bio-modal',
  templateUrl: './user-bio-modal.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./user-bio-modal.component.scss']
})
export class UserBioModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

}
