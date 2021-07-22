import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverNavigationPageRoutingModule } from './driver-navigation-routing.module';

import { DriverNavigationPage } from './driver-navigation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverNavigationPageRoutingModule
  ],
  declarations: [DriverNavigationPage]
})
export class DriverNavigationPageModule {}
