import { Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ProfileComponent } from './profile/profile.component';
import { FriendComponent } from './friend/friend.component';
import { StatusComponent } from './status/status.component';
//class component from hello-world.component.ts

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full',
  },
  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'friend',
    component: FriendComponent,
  },
  {
    path: 'status',
    component: StatusComponent,
  },
];
