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
  social?: string;
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
      photo: 'assets/photos/profil.jpg',
      dob: '14.08.2002.',
      program: 'Computer Science',
      university: 'FERIT, University of Osijek',
      hobbies: 'Košarka, Programiranje',
      contact: 'skaras@etfos.hr',
      social: 'https://facebook.com/pero'
    },
    {
      name: 'Marija',
      photo: 'assets/photos/profil.jpg',
      dob: '1996-08-22',
      program: 'Electronics',
      university: 'University of Osijek',
      hobbies: 'Reading, Hiking',
      contact: 'marija@example.com'
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
