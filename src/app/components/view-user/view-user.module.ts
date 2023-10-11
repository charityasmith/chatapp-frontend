import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { ViewUserRoutingModule } from './view-user-routing.module';
import { ViewUserComponent } from './view-user.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [ViewUserComponent],
  imports: [
    CommonModule,
    //SharedModule,
    ViewUserRoutingModule,
    MatToolbarModule,
  ],
  providers: [SharedModule],
})
export class ViewUserModule {}
