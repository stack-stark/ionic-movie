import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRouterModule } from './main.router.module';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainRouterModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
