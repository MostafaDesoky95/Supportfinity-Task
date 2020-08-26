import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root',
})
export class ProfileServiceService {
  str2 = 'test';
  str3 = 'test2';
  showSuccessMsg = false;
  profileForm: FormGroup;
  skillList: Array<string> = [
    'Java',
    'C++',
    'python',
    'Matlab',
    'Git',
    'VsCode',
    'Data structures',
    'Communication skills',
  ];
  constructor(private fb: FormBuilder) {}
  formInitData(): void {
    this.profileForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]{3,15}$')],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]{3,15}$')],
      ],
      firstSkill: ['', [Validators.required, Validators.minLength(3)]],
      secondSkill: ['', [Validators.required, Validators.minLength(3)]],
      thirdSkill: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  formChangeEvent(): void {
    this.profileForm.valueChanges.subscribe((changes) => {
      if (
        changes.firstSkill === changes.secondSkill &&
        changes.firstSkill !== ''
      ) {
        this.str2 = changes.secondSkill;
        $(document).ready(() => {
          $('#skill2').addClass('error');
        });
      } else {
        this.str2 = 'test';
        $(document).ready(() => {
          $('#skill2').removeClass('error');
        });
      }
      if (
        changes.firstSkill === changes.thirdSkill &&
        changes.firstSkill !== ''
      ) {
        this.str3 = changes.thirdSkill;
        $(document).ready(() => {
          $('#skill3').addClass('error');
        });
      } else {
        this.str3 = 'test2';
        $(document).ready(() => {
          $('#skill3').removeClass('error');
        });
      }
      if (
        changes.secondSkill === changes.thirdSkill &&
        changes.secondSkill !== ''
      ) {
        this.str3 = changes.thirdSkill;
        $(document).ready(() => {
          $('#skill3').addClass('error');
        });
      } else if (changes.secondSkill) {
        this.str3 = 'test2';
        $(document).ready(() => {
          $('#skill3').removeClass('error');
        });
      }
    });
  }
  loadLocalStorage(): void {
    if (localStorage.getItem('form-data') != null) {
      this.profileForm.setValue({
        firstName: JSON.parse(localStorage.getItem('form-data')).firstName,
        lastName: JSON.parse(localStorage.getItem('form-data')).lastName,
        firstSkill: JSON.parse(localStorage.getItem('form-data')).firstSkill,
        secondSkill: JSON.parse(localStorage.getItem('form-data')).secondSkill,
        thirdSkill: JSON.parse(localStorage.getItem('form-data')).thirdSkill,
      });
    }
  }
}
