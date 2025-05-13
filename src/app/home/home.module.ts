import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';
import { ProgrammaticFocusComponent } from '../components/programmatic-focus/programmatic-focus.component';

@NgModule({
  declarations: [HomePage, ProgrammaticFocusComponent], // Asegúrate que el componente esté declarado aquí
  imports: [IonicModule]
})
export class HomePageModule {}