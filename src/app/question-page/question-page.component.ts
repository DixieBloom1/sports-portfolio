import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatDialog} from '@angular/material/dialog';
import {QuestionAnswerModalComponent} from '../question-answer-modal/question-answer-modal.component';
@Component({
  selector: 'app-question-page',
  providers: [
    provideAnimations(),
  ],
  imports: [
    RouterLink
  ],
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss',
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('800ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100%)' }),
        animate('800ms ease-out',
          style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class QuestionPageComponent {
  constructor(public dialog: MatDialog) {}


  openSportModal(name: string): void {
    const dataMap: any = {
      'Sergej': {
        name: 'Sergej Karas',
        photo: 'assets/gif/ref.gif',
        bio: `Sergej je s košarkaškom loptom prijatelj još od osnovne škole – točnije od drugog razreda, kada je započeo treninge u KK Borovo.
            Dugi niz godina bio je aktivan igrač, a po završetku srednje tehničke škole prestaje s igranjem – ali ne i sa sportom.
            Ostaje u svijetu košarke kao sudac, a danas sudi utakmice Druge hrvatske lige, i dalje s jednakom strašću prema igri.`
      },
      'Luka': {
        name: 'Luka Štifić',
        photo: 'assets/gif/fan.gif',
        bio: `Luka je s nogometom "kliknuo" još kao klinac, i od tada su on i NK Slavonac iz Komletinaca nerazdvojni.
            Dugi niz godina bio je dio momčadi, sve do kraja srednje škole kada odlučuje okačiti kopačke o klin.
            Ipak, njegova ljubav prema nogometu ostaje snažna – danas je redovan navijač hrvatske reprezentacije i rijetko propušta utakmicu svojih Vatrenih.`
      }
    };

    const modalData = dataMap[name];
    this.dialog.open(QuestionAnswerModalComponent, {
      data: modalData,
      panelClass: 'custom-dialog-container',
      maxWidth: '30vw',
      maxHeight: '90vh',
      width: 'auto'
    });
  }

}
