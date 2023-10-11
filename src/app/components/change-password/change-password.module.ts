import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangePasswordRoutingModule } from './change-password-routing.module';
import { ChangePasswordComponent } from './change-password.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    //SharedModule,
    ChangePasswordRoutingModule,
    MatToolbarModule,
  ],
  providers: [SharedModule],
})
export class ChangePasswordModule {}
