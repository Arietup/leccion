import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss'],
  standalone: false,
})
export class FocusComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  focusElement(id: string) {
    const el = document.querySelector(id) as HTMLElement;
    const app = el?.closest('ion-app');
    if (app && 'setFocus' in app) {
      (app as any).setFocus([el]);
    }
  }
}
