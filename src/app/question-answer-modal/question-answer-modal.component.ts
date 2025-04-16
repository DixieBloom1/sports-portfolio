import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-question-answer-modal',
    imports: [],
    templateUrl: './question-answer-modal.component.html',
    styleUrl: './question-answer-modal.component.scss'
})
export class QuestionAnswerModalComponent {

    constructor(@Inject(MAT_DIALOG_DATA) public data: { name: string, photo: string, bio: string }) {
    }

}
