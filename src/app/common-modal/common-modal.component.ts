import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../app.component';

@Component({
  selector: 'app-common-modal',
  templateUrl: './common-modal.component.html',
  styleUrls: ['./common-modal.component.css']
})
export class CommonModalComponent implements OnInit {

  constructor(config: NgbModalConfig, public activeModal: NgbActiveModal, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      fName: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      about: new FormControl('', [Validators.required]),
    })
  };

  genderArr = [
    { lable: "Male", value: "Male" },
    { lable: "Female", value: "Female" }
  ];

  languagesArr = [{ id: '1', itemName: 'Hindi' }, { id: '2', itemName: 'Marathi' }, { id: '3', itemName: 'English' }];

  userForm: FormGroup;
  @Input() public data;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Languages",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  selectedItems = [];
  dropdownSettings = {};
  passData: User;
  submit() {
    console.log(this.userForm);
    let langArr = [];
    for (let index = 0; index < this.languagesArr.length; index++) {
      const element = this.languagesArr[index];
      langArr.push(element.itemName)
    };
    let dob = this.userForm.controls['dob'].value
    this.passData = {
      fName: this.userForm.controls['fName'].value,
      dob: dob.month + '/' + dob.day + '/' + dob.year,
      languages: langArr,
      gender: this.userForm.controls['gender'].value,
      about: this.userForm.controls['about'].value
    }
    this.passEntry.emit({
      status: true,
      data: this.passData
    });
    this.activeModal.close()
  }

}
