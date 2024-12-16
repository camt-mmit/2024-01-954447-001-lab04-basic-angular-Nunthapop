import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-friend',
  imports: [],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FriendComponent {}
