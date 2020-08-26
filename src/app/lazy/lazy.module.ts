import { ProfileComponent } from './../profile/profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyRoutingModule } from './lazy-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, LazyRoutingModule, ReactiveFormsModule],
})
export class LazyModule {}
