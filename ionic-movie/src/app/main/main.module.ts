import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { MainRouterModule } from './main.router.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MainRouterModule
  ]
})
export class MainModule { }
