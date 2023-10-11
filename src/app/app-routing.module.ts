import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    //path: '',
    //loadChildren: './components/auth-tabs/auth.module#AuthModule',
    path: '',
    loadChildren: () => import('./components/auth-tabs/auth.module').then((x) => x.AuthModule),
  },
  {
    path: 'streams',
    //loadChildren: './components/streams/streams.module#StreamsModule',
    loadChildren: () => import('./components/streams/streams.module').then((x) => x.StreamsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'notifications',
    //loadChildren: './components/notifications/notifications.module#NotificationsModule',
    loadChildren: () => import('./components/notifications/notifications.module').then((x) => x.NotificationsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'people',
    //loadChildren: './components/people/people.module#PeopleModule',
    loadChildren: () => import('./components/people/people.module').then((x) => x.PeopleModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'people/following',
    //loadChildren: './components/following/following.module#FollowingModule',
    loadChildren: () => import('./components/following/following.module').then((x) => x.FollowingModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'people/followers',
    //loadChildren: './components/followers/followers.module#FollowersModule',
    loadChildren: () => import('./components/followers/followers.module').then((x) => x.FollowersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'post/:id',
    //loadChildren: './components/comments/comments.module#CommentsModule',
    loadChildren: () => import('./components/comments/comments.module').then((x) => x.CommentsModule),
    canActivate: [AuthGuard],
  },
  {
    path: ':name',
    //loadChildren: './components/view-user/view-user.module#ViewUserModule',
    loadChildren: () => import('./components/view-user/view-user.module').then((x) => x.ViewUserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'images/:name',
    //loadChildren: './components/images/images.module#ImagesModule',
    loadChildren: () => import('./components/images/images.module').then((x) => x.ImagesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'account/password',
    //loadChildren: './components/change-password/change-password.module#ChangePasswordModule',
    loadChildren: () =>
      import('./components/change-password/change-password.module').then((x) => x.ChangePasswordModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'chat/:name',
    //loadChildren: './components/chat/chat.module#ChatModule',
    loadChildren: () => import('./components/chat/chat.module').then((x) => x.ChatModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
