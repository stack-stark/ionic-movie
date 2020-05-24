import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DetailComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'detail', component: DetailComponent }])
  ]
})
export class DetailModule { }
