import { ProfileServiceService } from './profile-service.service';
import { Component } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(private service: ProfileServiceService) {
    this.service.formInitData();
    this.service.formChangeEvent();
    this.service.loadLocalStorage();
  }
  get profileForm(): FormGroup {
    return this.service.profileForm;
  }
  get firstName(): any {
    return this.profileForm.get('firstName');
  }
  get lastName(): any {
    return this.profileForm.get('lastName');
  }
  get skillOneValue(): any {
    return this.profileForm.get('firstSkill');
  }
  get skillTwoValue(): any {
    return this.profileForm.get('secondSkill');
  }
  get skillThreeValue(): any {
    return this.profileForm.get('thirdSkill');
  }
  get successMsg(): boolean {
    return this.service.showSuccessMsg;
  }
  get str2(): string {
    return this.service.str2;
  }
  get str3(): string {
    return this.service.str3;
  }
  get skillList(): Array<string> {
    return this.service.skillList;
  }

  get formStatus(): boolean {
    if (
      this.service.str3 === 'test2' &&
      this.service.str2 === 'test' &&
      this.service.skillList.includes(
        this.profileForm.controls.firstSkill.value
      ) &&
      this.service.skillList.includes(
        this.profileForm.controls.secondSkill.value
      ) &&
      this.service.skillList.includes(
        this.profileForm.controls.thirdSkill.value
      )
    ) {
      return this.profileForm.valid;
    }
  }
  get skillOne(): boolean {
    if (
      !this.service.skillList.includes(
        this.profileForm.controls.firstSkill.value
      )
    ) {
      return false;
    }
    return true;
  }
  get skillTwo(): boolean {
    if (
      !this.service.skillList.includes(
        this.profileForm.controls.secondSkill.value
      )
    ) {
      return false;
    }
    return true;
  }
  get skillThree(): boolean {
    if (
      !this.service.skillList.includes(
        this.profileForm.controls.thirdSkill.value
      )
    ) {
      return false;
    }
    return true;
  }

  onSubmit(): void {
    localStorage.setItem('form-data', JSON.stringify(this.profileForm.value));
    this.service.showSuccessMsg = true;
  }
}
