import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CommonModalComponent } from './common-modal/common-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-machine-test';

  users = USERS;

  constructor(private modalService: NgbModal) {
    this.userData = this.users;
  }

  // For passing data to progress bar
  
  userData;

  // Modal logic

  ngbModalOptions: NgbModalOptions = {
    backdrop: "static",
    keyboard: false,
    windowClass: 'my-modal'
  };

  openModal() {
    const modalRef = this.modalService.open(CommonModalComponent, this.ngbModalOptions);
    modalRef.componentInstance.passEntry.subscribe((result) => {
      if (result.status == true) {
        this.users.push(result.data);
        this.userData = this.users;
      }
    })
  }

}

// User interface
export interface User {
  fName: string;
  dob: any;
  languages: any[];
  gender: string;
  about: string;
}

const USERS: User[] = [
  {
    fName: 'Nilesh',
    dob: '01/02/1994',
    languages: ['English', 'Hindi'],
    gender: 'Male',
    about: 'xyxyx xyxyxy'
  },
  {
    fName: 'Steve',
    dob: '01/02/1995',
    languages: ['English', 'Hindi'],
    gender: 'Male',
    about: 'xyxyx xyxyxy'
  },
  {
    fName: 'Ashwini',
    dob: '01/03/1994',
    languages: ['English', 'Marathi'],
    gender: 'Female',
    about: 'xyxyx xyxyxy'
  },
  {
    fName: 'Arjun',
    dob: '02/02/1994',
    languages: ['English', 'Hindi'],
    gender: 'Male',
    about: 'xyxyx xyxyxy'
  }
];
