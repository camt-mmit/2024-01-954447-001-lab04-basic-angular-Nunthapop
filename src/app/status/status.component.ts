import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status',
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusComponent {
  Date = new Date();
  Navi = navigator.userAgent;
  cookie = navigator.cookieEnabled;
  agent = navigator.userAgent;
  max = navigator.maxTouchPoints;
  lang = navigator.language;
  logic = navigator.hardwareConcurrency;
}
