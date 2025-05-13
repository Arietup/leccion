import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FocusComponent } from './focus/focus.component';

@NgModule({
  declarations: [FocusComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [FocusComponent]
})
export class ComponentsModule { }
