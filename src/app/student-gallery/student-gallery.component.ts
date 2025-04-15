import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {NgForOf} from '@angular/common';
import {UserBioModalComponent} from '../user-bio-modal/user-bio-modal.component';
import {MatDialog} from '@angular/material/dialog';

interface Student {
  name: string;
  photo: string;
  dob: string;
  program: string;
  university: string;
  hobbies: string;
  contact: string;
  audio?: string;
}

@Component({
  selector: 'app-student-gallery',
  templateUrl: './student-gallery.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./student-gallery.component.scss']
})
export class StudentGalleryComponent implements AfterViewInit{
  students: Student[] = [
    {
      name: 'Sergej Karas',
      photo: 'assets/photos/sergej.jpeg',
      dob: '14.08.2002.',
      program: 'Računarstvo',
      university: 'FERIT, Sveučilište u Osijeku',
      hobbies: 'Košarka, Programiranje',
      contact: 'skaras@etfos.hr',
      audio: 'assets/sound/sergej-voice.mp3'
    },
    {
      name: 'Luka Štifić',
      photo: 'assets/photos/luka.jpeg',
      dob: '01.03.2003',
      program: 'Računarstvo',
      university: 'FERIT, Sveučilište u Osijeku',
      hobbies: 'Pub kvizovi',
      contact: 'lstific@etfos.hr',
      audio: 'assets/sound/luka-voice.ogg'
    }
  ];


  constructor(public dialog: MatDialog, private el: ElementRef) {
  }

  openStudentModal(student: any): void {
    this.dialog.open(UserBioModalComponent, {
      data: student,
      panelClass: 'custom-dialog-container'
    });
  }


  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(this.el.nativeElement.querySelector('.secondary-content'));
  }

}
