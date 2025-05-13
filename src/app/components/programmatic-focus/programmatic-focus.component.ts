import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-programmatic-focus',
  templateUrl: './programmatic-focus.component.html',
  styleUrls: ['./programmatic-focus.component.scss'],
  standalone: false // Asegúrate que esta línea no exista o sea false
})
export class ProgrammaticFocusComponent {
  @ViewChild('buttonRef', { read: ElementRef }) buttonRef!: ElementRef;
  @ViewChild('radioRef', { read: ElementRef }) radioRef!: ElementRef;

  focusButton() { this.buttonRef.nativeElement.focus(); }
  focusRadio() { this.radioRef.nativeElement.focus(); }
}