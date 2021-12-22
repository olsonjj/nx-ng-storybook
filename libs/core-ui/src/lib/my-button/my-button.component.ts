import { Component, Input } from '@angular/core';

@Component({
  selector: 'core-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss'],
})
export class MyButtonComponent {
  @Input()
  label!: string;
}
