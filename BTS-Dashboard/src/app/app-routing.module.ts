import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { DashComponent } from './dash/dash.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

const redirectUnauthorized = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '', component: DashComponent },
  { path: 'user', 
  component: UserComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorized}
},

  { path: 'settings', 
  component: SettingsComponent,
  canActivate: [AngularFireAuthGuard],
  data: { authGuardPipe: redirectUnauthorized} 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
