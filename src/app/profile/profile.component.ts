import { ProfileServiceService } from './profile-service.service';
import { Component } from '@angular/core';
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
  get skillPlaceHolder(): string {
    return this.service.skillPlaceHolder;
  }
  get skillPlaceHolder2(): string {
    return this.service.skillPlaceHolder2;
  }
  get skillList(): Array<string> {
    return this.service.skillList;
  }

  get formStatus(): boolean {
    if (
      this.service.skillPlaceHolder2 === 'SkillValidationTest2' &&
      this.service.skillPlaceHolder === 'SkillValidationTest' &&
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
    return this.skillCheck(this.profileForm.controls.firstSkill.value);
  }
  get skillTwo(): boolean {
    return this.skillCheck(this.profileForm.controls.secondSkill.value);
  }
  get skillThree(): boolean {
    return this.skillCheck(this.profileForm.controls.thirdSkill.value);
  }

  skillCheck(skill: string): boolean {
    return this.service.skillList.includes(skill);
  }

  onSubmit(): void {
    localStorage.setItem('form-data', JSON.stringify(this.profileForm.value));
    this.service.showSuccessMsg = true;
  }
}
